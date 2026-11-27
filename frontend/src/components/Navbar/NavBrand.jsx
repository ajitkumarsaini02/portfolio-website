import React from "react";
import { motion } from "framer-motion";

const NavBrand = ({ handleNavClick }) => {
  return (
    <motion.a
      href="/"
      className="logo"
      onClick={(e) => handleNavClick(e, "hero")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="logo-tag">&lt;</span>
      <span>Ajit</span>
      <span className="logo-tag">/&gt;</span>
    </motion.a>
  );
};

export { NavBrand };
export default NavBrand;
