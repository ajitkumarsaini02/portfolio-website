import React from "react";

const AmbientGlow = () => {
  return (
    <div className="ambient-glow-wrapper" aria-hidden="true">
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="grid-overlay"></div>
    </div>
  );
};

export default AmbientGlow;
