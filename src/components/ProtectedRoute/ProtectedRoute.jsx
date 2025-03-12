import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (user === undefined) {
    console.log("⏳ Aguardando autenticação...");
    return null; // ⚠️ Retorna `null` temporariamente para evitar loops
  }

  if (!user) {
    console.warn("⚠️ Usuário não autenticado! Redirecionando para Login...");
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !user.roles.includes(requiredRole)) {
    console.warn("⚠️ Usuário autenticado, mas sem permissão! Redirecionando para /unauthorized");
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
