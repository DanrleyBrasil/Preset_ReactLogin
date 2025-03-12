import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} /> {/* 🔹 Redireciona "/" para "/login" */}
        <Route path="*" element={<Navigate to="/login" replace />} /> {/* 🔹 Redireciona rotas inválidas para login */}
      </Routes>
    </Router>
  );
}

export default App;
