import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, ShieldCheck, ArrowLeft } from "lucide-react";

const AdminLogin = ({ onLogin, loading, error, onBackToHome }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    onLogin(password);
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ maxWidth: "420px", width: "100%", padding: "32px", borderRadius: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ width: "52px", height: "52px", margin: "0 auto 12px", background: "rgba(99, 102, 241, 0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
            <Lock size={26} />
          </div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "6px" }}>Admin Access</h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Enter your security password to view portfolio analytics and messages.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "6px", fontWeight: "500" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                style={{ width: "100%", paddingRight: "40px" }}
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p style={{ color: "#EF4444", fontSize: "0.8rem", marginBottom: "16px" }}>{error}</p>}

          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? "Authenticating..." : <><ShieldCheck size={18} /> Unlock Dashboard</>}
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={onBackToHome} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <ArrowLeft size={14} /> Back to Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
