import React from "react";
import { Mail, CheckCircle, Reply, Trash2, Calendar, User } from "lucide-react";

const AdminMessagesTable = ({ messages, filter, setFilter, onUpdateStatus, onDelete, loading }) => {
  const filters = ["all", "unread", "read", "replied"];

  return (
    <div className="glass-card" style={{ padding: "24px", borderRadius: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>Inquiries Inbox ({messages.length})</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "0.78rem",
                textTransform: "capitalize",
                border: "none",
                cursor: "pointer",
                background: filter === f ? "var(--primary)" : "rgba(255, 255, 255, 0.05)",
                color: filter === f ? "#fff" : "var(--text-muted)",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "20px" }}>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "40px" }}>No messages found in this category.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {messages.map((m) => (
            <div key={m._id} style={{ padding: "16px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontWeight: "600", fontSize: "0.95rem" }}><User size={14} style={{ verticalAlign: "middle" }} /> {m.name}</span>
                    <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "999px", background: m.status === "unread" ? "rgba(245, 158, 11, 0.15)" : m.status === "replied" ? "rgba(16, 185, 129, 0.15)" : "rgba(99, 102, 241, 0.15)", color: m.status === "unread" ? "#F59E0B" : m.status === "replied" ? "#10B981" : "#6366F1" }}>
                      {m.status}
                    </span>
                  </div>
                  <a href={`mailto:${m.email}`} style={{ fontSize: "0.8rem", color: "var(--primary)", textDecoration: "none" }}>{m.email}</a>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={13} /> {new Date(m.createdAt).toLocaleDateString()} {new Date(m.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>

              <p style={{ fontWeight: "500", fontSize: "0.88rem", marginBottom: "6px" }}>{m.subject}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", background: "rgba(0, 0, 0, 0.15)", padding: "10px", borderRadius: "8px", whiteSpace: "pre-wrap", marginBottom: "12px" }}>{m.message}</p>

              <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", flexWrap: "wrap" }}>
                <a href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject)}`} className="btn btn-outline" style={{ padding: "4px 10px", fontSize: "0.75rem" }}>
                  <Reply size={13} /> Reply
                </a>
                {m.status !== "read" && (
                  <button onClick={() => onUpdateStatus(m._id, "read")} className="btn btn-outline" style={{ padding: "4px 10px", fontSize: "0.75rem" }}>
                    <CheckCircle size={13} /> Mark Read
                  </button>
                )}
                {m.status !== "replied" && (
                  <button onClick={() => onUpdateStatus(m._id, "replied")} className="btn btn-outline" style={{ padding: "4px 10px", fontSize: "0.75rem" }}>
                    <Mail size={13} /> Mark Replied
                  </button>
                )}
                <button onClick={() => onDelete(m._id)} style={{ background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", border: "none", borderRadius: "6px", padding: "4px 8px", cursor: "pointer" }} title="Delete">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessagesTable;
