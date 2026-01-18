import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const ProtectedRoute = ({ children }) => {
  const { isloggin, isVerified } = useAuth();

  if (!isloggin) {
    return <Navigate to="/" />;
  }

  if (!isVerified) {
    return <Navigate to="/verify-otp" />;
  }

  return children;
};
