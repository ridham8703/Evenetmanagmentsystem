import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const PublicRoute = ({ children }) => {
  const { isloggin, isVerified } = useAuth();

  if (isloggin && isVerified) {
    return <Navigate to="/home" />;
  }
  return children;
};
