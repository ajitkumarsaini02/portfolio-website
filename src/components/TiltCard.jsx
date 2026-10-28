import React, { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  ...props
}) {
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

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

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
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.45s ease-out",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.45s ease-out",
    });
    setBorderGlow({
      opacity: 0,
      transition: "opacity 0.45s ease-out",
    });
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
      {/* Dynamic Cursor Spotlight Glare */}
      <div
        className="tilt-glare"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 10,
          ...glareStyle,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Border Spotlight Glow */}
      <div
        className="tilt-border-spotlight"
        style={{
          position: "absolute",
          inset: "-1px",
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 1,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
          ...borderGlow,
        }}
        aria-hidden="true"
      />

      {children}
    </div>
  );
}
