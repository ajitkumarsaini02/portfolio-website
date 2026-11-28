import React, { useState } from "react";
import { Send, ExternalLink, X, Loader } from "lucide-react";

const AdminReplyModal = ({ message, token, apiBase, onClose, onSuccess }) => {
  const [subject, setSubject] = useState(`Re: ${message?.subject || "Portfolio Inquiry"}`);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(message.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(replyText)}`;

  const handleOpenGmailWeb = async () => {
    fetch(`${apiBase}/api/admin/messages/${message._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: "replied" }),
    }).catch(() => {});
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    onSuccess();
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setSending(true);
    setError("");

    try {
      const res = await fetch(`${apiBase}/api/admin/messages/${message._id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ replyText, subject }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send reply");
      if (data.emailSent === false) {
        window.open(data.gmailWebUrl || gmailUrl, "_blank", "noopener,noreferrer");
      }
      onSuccess();
    } catch (err) {
      setError(err.message + ". You can use 'Open in Gmail Web' to send directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div className="glass-card" style={{ width: "100%", maxWidth: "560px", padding: "24px", borderRadius: "16px", background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#f8fafc" }}>Reply to {message.name}</h3>
            <span style={{ fontSize: "0.82rem", color: "var(--primary)" }}>{message.email}</span>
          </div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer" }}><X size={20} /></button>
        </div>

        {error && <p style={{ color: "#ef4444", fontSize: "0.82rem", marginBottom: "12px" }}>{error}</p>}

        <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "0.88rem" }}
            placeholder="Subject"
          />
          <textarea
            rows={5}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "0.88rem", resize: "vertical" }}
            placeholder={`Type your reply to ${message.name}...`}
            required
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginTop: "8px", flexWrap: "wrap" }}>
            <button type="button" onClick={handleOpenGmailWeb} className="btn btn-outline" style={{ fontSize: "0.8rem", padding: "8px 12px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <ExternalLink size={14} /> Open in Gmail Web
            </button>
            <div style={{ display: "flex", gap: "8px" }}>
              <button type="button" onClick={onClose} className="btn btn-outline" style={{ fontSize: "0.8rem", padding: "8px 14px" }}>Cancel</button>
              <button type="submit" disabled={sending} className="btn btn-primary" style={{ fontSize: "0.8rem", padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                {sending ? <><Loader size={14} className="spin" /> Sending...</> : <><Send size={14} /> Send Reply</>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AdminReplyModal };
export default AdminReplyModal;
