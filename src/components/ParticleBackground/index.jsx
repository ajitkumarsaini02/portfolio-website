import React, { useRef } from "react";
import { useParticleCanvas } from "./useParticleCanvas";

const ParticleBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef, theme);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
};

export default ParticleBackground;
