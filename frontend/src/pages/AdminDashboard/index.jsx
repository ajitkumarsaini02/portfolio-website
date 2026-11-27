import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, LogOut, ShieldAlert } from "lucide-react";
import { useAdminAuth } from "./useAdminAuth";
import AdminLogin from "./AdminLogin";
import AdminStatsBar from "./AdminStatsBar";
import AdminMessagesTable from "./AdminMessagesTable";

const API_BASE = import.meta.env.VITE_API_URL || "";

const AdminDashboard = ({ onBackToHome }) => {
  const { token, isAuthenticated, loading: authLoading, error: authError, login, logout } = useAdminAuth();
  const [messages, setMessages] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [msgRes, anaRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/messages?status=${filter}`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_BASE}/api/analytics/summary`),
      ]);
      const msgJson = await msgRes.json();
      const anaJson = await anaRes.json();
      if (msgJson?.success) setMessages(msgJson.messages || []);
      if (anaJson?.success) setAnalytics(anaJson);
    } catch {
      // Offline fallback
    } finally {
      setLoading(false);
    }
  }, [token, filter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleUpdateStatus = async (id, status) => {
    try {
      await fetch(`${API_BASE}/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      fetchData();
    } catch {
      // Handle error
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await fetch(`${API_BASE}/api/admin/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch {
      // Handle error
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} loading={authLoading} error={authError} onBackToHome={onBackToHome} />;
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px 80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <button onClick={onBackToHome} className="btn btn-outline btn-sm" style={{ marginBottom: "12px" }}>
            <ArrowLeft size={14} /> Back to Portfolio
          </button>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>Portfolio Admin Dashboard</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Live analytics overview &amp; recruiter inquiries manager</p>
        </div>
        <button onClick={logout} className="btn btn-outline btn-sm" style={{ color: "#EF4444", borderColor: "rgba(239, 68, 68, 0.3)" }}>
          <LogOut size={14} /> Logout
        </button>
      </div>

      <AdminStatsBar stats={analytics} />
      <AdminMessagesTable messages={messages} filter={filter} setFilter={setFilter} onUpdateStatus={handleUpdateStatus} onDelete={handleDelete} loading={loading} />
    </div>
  );
};

export default AdminDashboard;
