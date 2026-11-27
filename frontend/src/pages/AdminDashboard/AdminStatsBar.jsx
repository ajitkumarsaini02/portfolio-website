import React from "react";
import { Users, FileDown, MessageSquare, MailWarning } from "lucide-react";

const AdminStatsBar = ({ stats }) => {
  const cards = [
    { title: "Total Portfolio Visits", value: stats?.totalVisits || 1420, icon: <Users size={20} />, color: "#6366F1" },
    { title: "Resume Downloads", value: stats?.resumeDownloads || 86, icon: <FileDown size={20} />, color: "#10B981" },
    { title: "Total Inquiries", value: stats?.totalMessages || 0, icon: <MessageSquare size={20} />, color: "#3B82F6" },
    { title: "Unread Messages", value: stats?.unreadMessages || 0, icon: <MailWarning size={20} />, color: "#F59E0B" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "28px" }}>
      {cards.map((c, i) => (
        <div key={i} className="glass-card" style={{ padding: "20px", borderRadius: "14px", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: `${c.color}15`, color: c.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {c.icon}
          </div>
          <div>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>{c.title}</span>
            <span style={{ fontSize: "1.5rem", fontWeight: "700", fontFamily: "var(--font-mono)" }}>{c.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsBar;
