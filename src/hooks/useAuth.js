import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(undefined); // 🔥 Começa como `undefined`

      useEffect(() => {
      fetch("http://localhost:8080/me", { credentials: "include" })
        .then((res) => {
          if (!res.ok) throw new Error("Usuário não autenticado");
          return res.json();
        })
        .then((data) => {
          console.log("✅ Usuário autenticado:", data);
          setUser(data);
        })
        .catch(() => {
          console.error("❌ Nenhum usuário autenticado encontrado.");
          setUser(null);
        });
    }, []);

  const logout = async () => {
    try {
      console.log("🔹 Chamando API /api/logout...");

      const response = await fetch("http://localhost:8080/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Erro ao realizar logout: ${response.status}`);
      }

      console.log("✅ Logout realizado com sucesso! Redirecionando...");

      setUser(null);
      setTimeout(() => {
        window.location.href = "/login"; // 🔥 Redireciona sem piscar
      }, 200);
    } catch (error) {
      console.error("❌ Erro ao fazer logout:", error);
    }
  };

  return { user, logout };
}
