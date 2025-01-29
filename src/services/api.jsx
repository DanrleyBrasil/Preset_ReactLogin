import axios from 'axios';

const API_URL = 'http://localhost:8081'; // Substitua pela URL da sua API

export const login = async (userEmail, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { userEmail, password });
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};
