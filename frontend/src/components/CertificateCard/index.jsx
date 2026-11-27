import React from "react";
import { motion } from "framer-motion";
import CardMedia from "./CardMedia";
import CardBody from "./CardBody";

const CertificateCard = ({ cert, onSelect, index = 0 }) => {
  return (
    <motion.div
      className="cert-card glass-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
    >
      <CardMedia cert={cert} onSelect={onSelect} />
      <CardBody cert={cert} onSelect={onSelect} />
    </motion.div>
  );
};

export default CertificateCard;
