import { useEffect } from "react";
import { createParticles, drawLines, updateParticles } from "./particleEngine";

const useParticleCanvas = (canvasRef, theme) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

    const handleClick = (e) => {
      for (let p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 12;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    const particles = createParticles(width, height);
    const isDark = theme === "dark";
    const dotColor = isDark ? "rgba(16, 185, 129, 0.75)" : "rgba(4, 120, 87, 0.6)";
    const lineColor = isDark ? "rgba(16, 185, 129, 0.16)" : "rgba(4, 120, 87, 0.12)";
    const mouseLineColor = isDark ? "rgba(20, 184, 166, 0.4)" : "rgba(13, 148, 136, 0.28)";

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      drawLines(ctx, particles, mouse, lineColor, mouseLineColor);
      updateParticles(ctx, particles, dotColor, width, height);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef, theme]);
};

export { useParticleCanvas };
export default useParticleCanvas;
