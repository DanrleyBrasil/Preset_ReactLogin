import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚫 Acesso Negado</h1>
      <p>Você não tem permissão para acessar esta página.</p>
      <Link to="/login">Voltar para Login</Link>
    </div>
  );
}
