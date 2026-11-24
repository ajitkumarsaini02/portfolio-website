import React, { useRef, useState } from "react";

const TiltCard = ({ children, className = "", maxTilt = 10, ...props }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [borderGlow, setBorderGlow] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -maxTilt;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.08s ease-out",
    });
    setGlareStyle({
      opacity: 0.22,
      background: `radial-gradient(400px circle at ${x}px ${y}px, var(--primary-glow), transparent 70%)`,
      transition: "opacity 0.15s ease-out",
    });
    setBorderGlow({
      opacity: 0.9,
      background: `radial-gradient(280px circle at ${x}px ${y}px, var(--primary), transparent 70%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.45s ease-out",
    });
    setGlareStyle({ opacity: 0, transition: "opacity 0.45s ease-out" });
    setBorderGlow({ opacity: 0, transition: "opacity 0.45s ease-out" });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", willChange: "transform", ...style }}
      {...props}
    >
      <div
        className="tilt-glare"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 10,
          ...glareStyle,
        }}
        aria-hidden="true"
      />
      <div
        className="tilt-border-spotlight"
        style={{
          position: "absolute",
          inset: "-1px",
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 1,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          ...borderGlow,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default TiltCard;
