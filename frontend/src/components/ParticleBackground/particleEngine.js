export const createParticles = (width, height) => {
  const count = Math.min(Math.floor(width / 13), 105);
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      radius: Math.random() * 2.2 + 0.8,
    });
  }
  return particles;
};

export const drawLines = (ctx, particles, mouse, lineColor, mouseLineColor) => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 125) {
        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1 - dist / 125;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }

    if (mouse.x !== null && mouse.y !== null) {
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < mouse.radius) {
        ctx.beginPath();
        ctx.strokeStyle = mouseLineColor;
        ctx.lineWidth = (1 - mdist / mouse.radius) * 1.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }
};

export const updateParticles = (ctx, particles, dotColor, width, height) => {
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();

    p.vx *= 0.98;
    p.vy *= 0.98;
    if (Math.abs(p.vx) < 0.2) p.vx = (Math.random() - 0.5) * 0.7;
    if (Math.abs(p.vy) < 0.2) p.vy = (Math.random() - 0.5) * 0.7;

    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
  }
};
