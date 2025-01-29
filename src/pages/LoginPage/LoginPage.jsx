import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import './style.css';

const getUserRoleFromToken = (token) => {
  try {
    if (!token) {
      console.error('Token não encontrado');
      return null;
    }

    const base64Url = token.split('.')[1];
    if (!base64Url) {
      console.error('Formato de token inválido');
      return null;
    }

    const payload = JSON.parse(atob(base64Url));
    return payload.scope || payload.role || null;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);

      if (!data.accessToken) {
        alert('Erro: Token não recebido!');
        return;
      }
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('expiresIn', Date.now() + data.expiresIn * 1000);

      const userRole = getUserRoleFromToken(data.accessToken);
      console.log(userRole)
      if (userRole === 'ADMIN') {
        navigate('/admin');
      } else if (userRole === 'USER') {
        navigate('/user');
      } else {
        alert('Erro: Permissão inválida!');
      }
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.'+ error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="Usuário" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
