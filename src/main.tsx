// Ensure window.fetch has bound context to prevent Illegal invocation
try {
  if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
    const realFetch = window.fetch.bind(window);
    let currentFetch = realFetch;
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch') || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
    if (!desc || (desc.get && !desc.set)) {
      Object.defineProperty(window, 'fetch', {
        get() {
          return currentFetch;
        },
        set(fn) {
          currentFetch = typeof fn === 'function' ? fn.bind(window) : fn;
        },
        configurable: true,
        enumerable: true
      });
    }
  }
} catch {
  // Ignore
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
