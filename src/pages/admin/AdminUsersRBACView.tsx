import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Shield, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  XCircle, 
  Key, 
  UserPlus, 
  AlertTriangle,
  Lock,
  Eye
} from 'lucide-react';
import { AdminUser, RoleDefinition } from '../../types/admin';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminUsersRBACView: React.FC = () => {
  const { token, hasPermission } = useAdminAuth();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [roles, setRoles] = useState<RoleDefinition[]>([]);
  const [activeSubTab, setActiveSubTab] = useState<'users' | 'rbac'>('users');
  const [isLoading, setIsLoading] = useState(true);
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [selectedRoleForEdit, setSelectedRoleForEdit] = useState<RoleDefinition | null>(null);

  // Form state for creating user
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRole, setFormRole] = useState('SEO Manager');
  const [formDepartment, setFormDepartment] = useState('GEO & Search');

  const fetchUsersAndRoles = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setUsers(data.users || []);
        setRoles(data.roles || []);
      }
    } catch {
      // fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersAndRoles();
  }, [token]);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          role: formRole,
          department: formDepartment,
          status: 'active'
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowNewUserModal(false);
        setFormName('');
        setFormEmail('');
        fetchUsersAndRoles();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enterprise user account?')) return;
    try {
      await fetch(`/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchUsersAndRoles();
    } catch {
      // ignore
    }
  };

  const handleToggleUserStatus = async (user: AdminUser) => {
    const nextStatus = user.status === 'active' ? 'suspended' : 'active';
    try {
      await fetch(`/api/admin/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: nextStatus })
      });
      fetchUsersAndRoles();
    } catch {
      // ignore
    }
  };

  const handleToggleRolePermission = async (roleId: string, permKey: string, currentValue: boolean) => {
    const role = roles.find(r => r.id === roleId);
    if (!role) return;

    const newPermissions = {
      ...role.permissions,
      [permKey]: !currentValue
    };

    try {
      await fetch(`/api/admin/rbac/roles/${roleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ permissions: newPermissions })
      });
      fetchUsersAndRoles();
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Enterprise Users & RBAC Matrix</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Configure fine-grained Role-Based Access Control across 13 enterprise departments.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveSubTab('users')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'users' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              User Management ({users.length})
            </button>
            <button
              onClick={() => setActiveSubTab('rbac')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'rbac' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              RBAC Permissions ({roles.length} Roles)
            </button>
          </div>

          {activeSubTab === 'users' && (
            <button
              onClick={() => setShowNewUserModal(true)}
              className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>+ Add User</span>
            </button>
          )}
        </div>
      </div>

      {/* USER MANAGEMENT VIEW */}
      {activeSubTab === 'users' && (
        <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">User / Department</th>
                  <th className="py-4 px-6">Enterprise Role</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">2FA Security</th>
                  <th className="py-4 px-6">Last Login</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-sm">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                        />
                        <div>
                          <div className="font-bold text-white">{user.name}</div>
                          <div className="text-xs text-zinc-400">{user.email}</div>
                          <div className="text-[10px] text-zinc-500">{user.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/15 text-brand-400 border border-brand-500/30">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                          user.status === 'active'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-red-500/15 text-red-400 border border-red-500/30'
                        }`}
                      >
                        {user.status === 'active' ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5" />
                        )}
                        <span className="capitalize">{user.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {user.twoFactorEnabled ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          <Shield className="w-3.5 h-3.5" />
                          <span>Enabled</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Not Configured</span>
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-xs text-zinc-400 font-mono">
                      {user.lastLogin}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleToggleUserStatus(user)}
                          className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300 transition-colors"
                        >
                          {user.status === 'active' ? 'Suspend' : 'Activate'}
                        </button>
                        {user.role !== 'Super Admin' && (
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ROLE-BASED ACCESS CONTROL (RBAC) VIEW */}
      {activeSubTab === 'rbac' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-300 flex items-center justify-between">
            <span>
              <strong>Enterprise RBAC Notice:</strong> Each role determines granular module access across CMS, Blog, Portfolio, CRM, SEO, Media, Analytics, Users, Security, and System Settings.
            </span>
            <span className="font-bold uppercase text-[10px] px-2 py-0.5 rounded bg-brand-500 text-white">
              Strict Enforcement
            </span>
          </div>

          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Enterprise Role</th>
                    <th className="py-4 px-4 text-center">CMS</th>
                    <th className="py-4 px-4 text-center">Blog</th>
                    <th className="py-4 px-4 text-center">Portfolio</th>
                    <th className="py-4 px-4 text-center">CRM Lead</th>
                    <th className="py-4 px-4 text-center">SEO GEO</th>
                    <th className="py-4 px-4 text-center">Media</th>
                    <th className="py-4 px-4 text-center">Analytics</th>
                    <th className="py-4 px-4 text-center">Users</th>
                    <th className="py-4 px-4 text-center">Security</th>
                    <th className="py-4 px-4 text-center">Settings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-xs">
                  {roles.map(role => (
                    <tr key={role.id} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="py-3.5 px-6">
                        <div className="font-bold text-white text-sm">{role.name}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">{role.description}</div>
                      </td>

                      {(Object.keys(role.permissions) as (keyof typeof role.permissions)[]).map(permKey => {
                        const isAllowed = role.permissions[permKey];
                        const isSystemSuper = role.name === 'Super Admin';
                        const keyStr = String(permKey);

                        return (
                          <td key={keyStr} className="py-3.5 px-4 text-center">
                            <button
                              disabled={isSystemSuper}
                              onClick={() => handleToggleRolePermission(role.id, keyStr, isAllowed)}
                              className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                                isAllowed
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                                  : 'bg-zinc-800/80 text-zinc-600 border border-zinc-700/60 hover:border-zinc-500'
                              } ${isSystemSuper ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
                              title={isSystemSuper ? 'Super Admin always has full access' : `Toggle ${keyStr} for ${role.name}`}
                            >
                              {isAllowed ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <XCircle className="w-4 h-4" />
                              )}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CREATE NEW USER MODAL */}
      {showNewUserModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white">Create Enterprise User Account</h3>
              <button
                onClick={() => setShowNewUserModal(false)}
                className="text-zinc-500 hover:text-white transition-colors text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="e.g. Tanvir Rahman"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Enterprise Email</label>
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={e => setFormEmail(e.target.value)}
                  placeholder="e.g. tanvir@digitalgrowltd.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Assign Enterprise Role</label>
                <select
                  value={formRole}
                  onChange={e => setFormRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                >
                  {roles.map(r => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Department / Branch Hub</label>
                <input
                  type="text"
                  value={formDepartment}
                  onChange={e => setFormDepartment(e.target.value)}
                  placeholder="e.g. Dhaka HQ • GEO Growth"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewUserModal(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/20"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
