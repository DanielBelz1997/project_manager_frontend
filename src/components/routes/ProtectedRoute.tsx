import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole: 'admin' | 'user';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { isAuthenticated, role, roleLoading } = useAuth();

  if (roleLoading) return <div>Loading...</div>;

  if (!isAuthenticated || role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;