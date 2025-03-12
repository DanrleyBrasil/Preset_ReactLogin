import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔹 Usuário no Home:", user);

    if (user === undefined) {
      console.log("⏳ Aguardando autenticação...");
      return;
    }

    setLoading(false); // ✅ Agora sabemos que `user` já foi carregado

    if (!user) {
      console.warn("⚠️ Usuário não autenticado! Redirecionando para Login...");
      navigate("/login");
      return;
    }

    if (!user.roles || !user.roles.includes("ADMIN")) {
      console.warn("⚠️ Usuário autenticado, mas sem permissão ADMIN! Redirecionando...");
      navigate("/unauthorized");
      return;
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    console.log("🔹 Iniciando logout...");
    await logout();
  };

  // 🔥 **Enquanto `loading` for `true`, mostramos um `loading` na tela**
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
        <p>Verificando autenticação...</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bem-vindo, Admin!</h2>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
