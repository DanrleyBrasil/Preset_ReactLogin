import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    console.log("🔹 Redirecionando para Home após login...");
    navigate("/home");  // ✅ Agora o redirecionamento funciona!
  };

  return <LoginForm onLogin={handleLoginSuccess} />;
};

export default Login;
