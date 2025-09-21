import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role?: 'alumni' | 'student' | 'admin') => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, password: string, role: 'alumni' | 'student') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: 'alumni' | 'student' | 'admin' = 'alumni') => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    const mockUser: User = {
      id: '1',
      name: email === 'admin@university.edu' ? 'Admin User' : 'John Doe',
      email,
      role: email === 'admin@university.edu' ? 'admin' : role,
      isAuthenticated: true
    };
    
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (name: string, email: string, password: string, role: 'alumni' | 'student') => {
    // Mock signup - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    const mockUser: User = {
      id: '1',
      name,
      email,
      role,
      isAuthenticated: true
    };
    
    setUser(mockUser);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};