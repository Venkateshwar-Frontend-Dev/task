import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import UserListPage from "./pages/admin/user/UserListPage";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  const token = useSelector((state) => state.auth.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/user-list" replace /> : <LoginPage />}
        />
        <Route
          path="/user-list"
          element={
            <ProtectedRoute>
              <UserListPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
