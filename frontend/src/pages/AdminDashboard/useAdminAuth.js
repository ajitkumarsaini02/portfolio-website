import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const useAdminAuth = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem("admin_portfolio_token") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (password) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data?.success) {
        setToken(data.token);
        sessionStorage.setItem("admin_portfolio_token", data.token);
        return true;
      }
      setError(data?.message || "Invalid password");
      return false;
    } catch {
      setError("Server connection failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken("");
    sessionStorage.removeItem("admin_portfolio_token");
  };

  return { token, isAuthenticated: Boolean(token), loading, error, login, logout };
};

export { useAdminAuth };
export default useAdminAuth;
