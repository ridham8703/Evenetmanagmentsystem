import { Outlet, useNavigate } from "react-router-dom";
import { Adminheader } from "./Adminheader";
import { useAuth } from "../../store/auth";
import { useEffect } from "react";

export const Adminlayout = () => {
  const navigate = useNavigate();

  const { isAdmin } = useAuth();
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin]);

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Adminheader />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
