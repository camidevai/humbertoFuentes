import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthCredentials {
  username: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  changePassword: (oldPassword: string, newPassword: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_CREDENTIALS: AuthCredentials = {
  username: 'humbertoFuentes',
  password: '123456'
};

const STORAGE_KEY = 'admin_credentials';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Initialize credentials if not exists
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CREDENTIALS));
    }

    // Check if already authenticated
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;

    const credentials: AuthCredentials = JSON.parse(stored);
    
    if (credentials.username === username && credentials.password === password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  const changePassword = (oldPassword: string, newPassword: string): boolean => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;

    const credentials: AuthCredentials = JSON.parse(stored);
    
    if (credentials.password === oldPassword) {
      credentials.password = newPassword;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(credentials));
      return true;
    }
    
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

