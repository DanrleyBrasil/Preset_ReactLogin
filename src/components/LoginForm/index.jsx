import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { StyledContainer, StyledPaper, StyledForm } from "./styles";

const LoginForm = ({ onLogin }) => {  // 🔹 Agora recebe a função `onLogin`
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: email, password }),
        credentials: "include", // ✅ Envia e recebe cookies HTTPOnly
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      console.log("✅ Login bem-sucedido!");
      onLogin(); // 🔹 Chama a função que foi passada pelo `Login.jsx`

    } catch (error) {
      console.error("⚠️ Erro ao fazer login:", error.message);
      setError("Credenciais inválidas!"); // Exibe o erro na tela
    }
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <StyledForm>
          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Entrar
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
};

export default LoginForm;
