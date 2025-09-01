// src/components/AdminRoute.js
import { useState, useEffect } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Navigate } from "react-router-dom";
import AccessDenied from "./AccessDenied";

const AdminRoute = ({ children }) => {
  const { state, getBasicUserInfo } = useAuthContext();
  const { isAuthenticated } = state;

  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!isAuthenticated) {
        setIsLoading(false);
        return;
      }

      try {
        // fetch the full user info
        const info = await getBasicUserInfo();
        setUserInfo(info);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
      setIsLoading(false);
    };

    fetchUserInfo();
  }, [isAuthenticated, getBasicUserInfo]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <div>Checking permissions...</div>;
  }

  // Check for admin role
  const roles = userInfo?.roles;
  let isAdmin = false;

  if (typeof roles === "string") {
    isAdmin = roles === "admin";
  } else if (Array.isArray(roles)) {
    isAdmin = roles.includes("admin");
  }

  if (!isAdmin) {
    return <AccessDenied />;
  }

  return children;
};

export default AdminRoute;
