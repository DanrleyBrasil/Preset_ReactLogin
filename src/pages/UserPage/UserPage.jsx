import { useState } from 'react';
import axios from 'axios';
import TokenTimer from '../../components/TokenTimer';
import './style.css';

const UserPage = () => {
    const [message, setMessage] = useState('');

    const handleHelloClick = async () => {
        const token = localStorage.getItem('token'); // Pegando o token do localStorage
        if (!token) {
            setMessage('Erro: Token não encontrado!');
            return;
        }

        try {
            const response = await axios.get('http://localhost:8081/helloWorldUser', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Erro ao chamar /helloWorldUser:', error);
            setMessage('Erro ao buscar mensagem.');
        }
    };

    return (
        <div className="user-container">
            <h2>Bem-vindo, Usuário</h2>
            <TokenTimer />
            <button className="hello-button" onClick={handleHelloClick}>Hello</button>
            {message && <p className="response-message">{message}</p>}
        </div>
    );
};

export default UserPage;
