import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClickShockwave() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-6), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 900);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="shockwave-container" aria-hidden="true">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <React.Fragment key={ripple.id}>
            {/* Primary Glowing Ring */}
            <motion.div
              className="shockwave-ring ring-primary"
              style={{ left: ripple.x, top: ripple.y }}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.9,
                x: "-50%",
                y: "-50%",
              }}
              animate={{ width: 140, height: 140, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.1, 0.8, 0.3, 1] }}
            />
            {/* Secondary Violet Ring */}
            <motion.div
              className="shockwave-ring ring-secondary"
              style={{ left: ripple.x, top: ripple.y }}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.7,
                x: "-50%",
                y: "-50%",
              }}
              animate={{ width: 220, height: 220, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.15, 0.85, 0.35, 1],
                delay: 0.05,
              }}
            />
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
}
