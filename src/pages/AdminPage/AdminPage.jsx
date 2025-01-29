import { useState } from 'react';
import axios from 'axios';
import TokenTimer from '../../components/TokenTimer';
import './style.css';

const AdminPage = () => {
    const [message, setMessage] = useState('');

    const handleHelloClick = async () => {
        const token = localStorage.getItem('token'); // Pegando o token do localStorage
        if (!token) {
            setMessage('Erro: Token não encontrado!');
            return;
        }

        try {
            const response = await axios.get('http://localhost:8081/helloWorldAdmin', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Erro ao chamar /helloWorldAdmin:', error);
            setMessage('Erro ao buscar mensagem.');
        }
    };

    return (
        <div className="admin-container">
            <h2>Bem-vindo, Admin</h2>
            <TokenTimer />
            <button className="hello-button" onClick={handleHelloClick}>Hello</button>
            {message && <p className="response-message">{message}</p>}
        </div>
    );
};

export default AdminPage;
