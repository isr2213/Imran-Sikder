import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AdminUser } from '../types/admin';

interface AdminAuthContextType {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  requiresTwoFactor: boolean;
  pendingEmail: string | null;
  login: (email: string, passwordAttempt: string, rememberMe?: boolean, totpCode?: string) => Promise<{ success: boolean; error?: string; requiresTwoFactor?: boolean }>;
  logout: () => Promise<void>;
  logoutAllDevices: () => Promise<void>;
  hasPermission: (moduleOrAction: string) => boolean;
  activeBranch: string;
  setActiveBranch: (branch: string) => void;
  sessionTimeRemainingMs: number | null;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const LOCAL_TOKEN_KEY = 'dgl_enterprise_admin_token';
const LOCAL_USER_KEY = 'dgl_enterprise_admin_user';
const LOCAL_BRANCH_KEY = 'dgl_enterprise_admin_branch';

async function fetchJsonSafely(url: string, options?: RequestInit): Promise<{ ok: boolean; status: number; data: any }> {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      try {
        const data = await res.json();
        return { ok: res.ok, status: res.status, data };
      } catch {
        return {
          ok: false,
          status: res.status,
          data: { success: false, error: 'Invalid JSON response received from server.' }
        };
      }
    } else {
      return {
        ok: false,
        status: res.status,
        data: {
          success: false,
          error: `Authentication backend unavailable (${res.status} ${res.statusText || 'Server Error'}). Please verify backend status.`
        }
      };
    }
  } catch {
    return {
      ok: false,
      status: 0,
      data: {
        success: false,
        error: 'Authentication server is unreachable. Please check your network connection.'
      }
    };
  }
}

export const AdminAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem(LOCAL_TOKEN_KEY);
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requiresTwoFactor, setRequiresTwoFactor] = useState<boolean>(false);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);
  const [activeBranch, setActiveBranchState] = useState<string>(() => {
    return localStorage.getItem(LOCAL_BRANCH_KEY) || 'Dhaka HQ (Banani)';
  });
  const [sessionTimeRemainingMs, setSessionTimeRemainingMs] = useState<number | null>(14400000); // 4 hours default

  const setActiveBranch = (branch: string) => {
    setActiveBranchState(branch);
    localStorage.setItem(LOCAL_BRANCH_KEY, branch);
  };

  useEffect(() => {
    if (token) {
      // Verify session token on initial mount
      fetchJsonSafely('/api/admin/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(({ ok, status, data }) => {
        if (ok && data?.success && data?.user) {
          setUser(data.user);
          localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(data.user));
        } else if (status === 401) {
          // Token invalid or expired
          logout();
        }
      });
    }
  }, [token]);

  const login = async (email: string, passwordAttempt: string, rememberMe = false, totpCode?: string) => {
    setIsLoading(true);
    const { ok, data } = await fetchJsonSafely('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: passwordAttempt, rememberMe, totpCode })
    });

    if (data?.requiresTwoFactor) {
      setRequiresTwoFactor(true);
      setPendingEmail(data.email || email);
      setIsLoading(false);
      return { success: false, requiresTwoFactor: true };
    }

    if (ok && data?.success && data?.token && data?.user) {
      setToken(data.token);
      setUser(data.user);
      setRequiresTwoFactor(false);
      setPendingEmail(null);
      localStorage.setItem(LOCAL_TOKEN_KEY, data.token);
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(data.user));
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return { success: false, error: data?.error || 'Authentication failed.' };
  };

  const logout = async () => {
    if (token) {
      try {
        await fetch('/api/admin/auth/logout', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch {
        // ignore network error on logout
      }
    }
    setToken(null);
    setUser(null);
    setRequiresTwoFactor(false);
    localStorage.removeItem(LOCAL_TOKEN_KEY);
    localStorage.removeItem(LOCAL_USER_KEY);
  };

  const logoutAllDevices = async () => {
    if (token) {
      try {
        await fetch('/api/admin/auth/logout-all', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch {
        // ignore
      }
    }
    await logout();
  };

  const hasPermission = (moduleOrAction: string): boolean => {
    if (!user) return false;
    if (user.role === 'Super Admin' || user.permissions.includes('ALL') || user.permissions.includes('ALL.manage')) {
      return true;
    }
    return user.permissions.some(p => 
      p === moduleOrAction || 
      p.startsWith(moduleOrAction.split('.')[0] + '.manage')
    );
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        requiresTwoFactor,
        pendingEmail,
        login,
        logout,
        logoutAllDevices,
        hasPermission,
        activeBranch,
        setActiveBranch,
        sessionTimeRemainingMs
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
