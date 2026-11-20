import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import MagneticButton from "../../components/MagneticButton";

const CertPageNav = ({ handleBack, theme, toggleTheme }) => {
  return (
    <header className="cert-page-nav">
      <div className="container cert-page-nav-container">
        <button
          onClick={handleBack}
          className="cert-nav-back-btn"
          aria-label="Back to main portfolio"
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </button>

        <div className="cert-page-nav-right">
          <MagneticButton strength={0.3}>
            <motion.button
              onClick={toggleTheme}
              className="icon-btn"
              aria-label="Toggle dark/light theme"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};

export default CertPageNav;
