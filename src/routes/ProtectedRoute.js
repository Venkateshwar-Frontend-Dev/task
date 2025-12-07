import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    // If user is not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
}
