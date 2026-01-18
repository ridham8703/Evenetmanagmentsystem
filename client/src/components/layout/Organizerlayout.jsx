import { Outlet, useNavigate } from "react-router-dom";
import { Organizerheader } from "./Organizerheader";
import { useAuth } from "../../store/auth";
import { useEffect } from "react";

export const Organizerlayout = () => {
  const navigate = useNavigate();

  const { isOrganizerApproved } = useAuth();
  useEffect(() => {
    if (!isOrganizerApproved) {
      navigate("/"); 
    }
  }, [isOrganizerApproved]);
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Organizerheader />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
