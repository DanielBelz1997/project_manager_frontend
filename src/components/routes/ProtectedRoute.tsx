import { useAuthStore } from "@/store/auth";
import React from "react";
import { Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  return token ? children : <Navigate to={"/unauthorized"} replace />;
};

export default ProtectedRoute;

