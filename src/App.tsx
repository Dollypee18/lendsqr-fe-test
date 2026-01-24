import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import { getFromStorage } from "./utils/storage";
import "./styles/global.scss";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = getFromStorage<boolean>("isAuthenticated");
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <ProtectedRoute>
              <UserDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
