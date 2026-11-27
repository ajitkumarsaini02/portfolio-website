import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ProfileChip = ({ totalProblems }) => {
  return (
    <motion.div
      className="profile-chip-glow"
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
    >
      <Sparkles size={20} color="var(--primary)" />
      <div>
        <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)" }}>Open to Work</p>
        <p style={{ fontSize: "0.72rem", color: "var(--primary)", fontFamily: "var(--font-mono)" }}>
          {totalProblems}+ Problems Solved
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileChip;
