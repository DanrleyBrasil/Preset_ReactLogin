import { useState, useEffect } from 'react';
import './style.css';

const TokenTimer = () => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const expiresIn = localStorage.getItem('expiresIn');
        if (expiresIn) {
            const interval = setInterval(() => {
                const remainingTime = Math.max(0, Math.floor((expiresIn - Date.now()) / 1000));
                setTimeLeft(remainingTime);

                if (remainingTime === 0) {
                    localStorage.clear();
                    window.location.href = '/';
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, []);

    // Função para converter segundos para HH:mm:ss
    const formatTime = (totalSeconds) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return <div className="token-timer">Tempo restante: {formatTime(timeLeft)}</div>;
};

export default TokenTimer;
