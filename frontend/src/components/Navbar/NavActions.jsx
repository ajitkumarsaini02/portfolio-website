import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X, FileText, RotateCw } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { useLiveStats } from "../../context/LiveStatsContext";
import MagneticButton from "../MagneticButton";
import { trackResumeDownload } from "../../hooks/useAnalyticsTracker";

const NavActions = ({ theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen }) => {
  const { loading, refreshStats } = useLiveStats();

  return (
    <div className="nav-actions">
      <MagneticButton strength={0.4}>
        <motion.button
          onClick={refreshStats}
          disabled={loading}
          className="icon-btn"
          aria-label="Refresh live coding stats"
          title={loading ? "Refreshing live stats..." : "Refresh Live Stats"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: loading ? 360 : 0 }} transition={{ repeat: loading ? Infinity : 0, duration: 1, ease: "linear" }}>
            <RotateCw size={17} />
          </motion.div>
        </motion.button>
      </MagneticButton>

      <MagneticButton strength={0.4}>
        <motion.button
          onClick={toggleTheme}
          className="icon-btn"
          aria-label="Toggle dark/light theme"
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </motion.button>
      </MagneticButton>

      <MagneticButton strength={0.25}>
        <motion.a
          href={personalInfo.resumePath}
          download="Ajit_Kumar_Saini_Resume.pdf"
          onClick={() => trackResumeDownload("navbar_button")}
          className="btn btn-primary btn-sm desktop-resume-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText size={16} /> Resume
        </motion.a>
      </MagneticButton>

      <button className="icon-btn mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};

export default NavActions;
