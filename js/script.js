/* =========================================================
   AJIT KUMAR SAINI — PORTFOLIO SCRIPTS
   1. Loader
   2. Custom cursor
   3. Navbar scroll / active link / mobile menu
   4. Theme toggle
   5. Typing effect
   6. Particle background
   7. Animated counters
   8. Skill bar animation
   9. Project filtering
   10. Contribution graph generator
   11. FAQ accordion
   12. Contact form validation
   13. Scroll to top
   14. AOS init
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Loader ---------- */
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
    });
    // Fallback in case 'load' already fired
    setTimeout(() => loader.classList.add('hidden'), 2500);
  }

  /* ---------- 2. Custom cursor ---------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const isTouch = window.matchMedia('(hover: none)').matches;

  if (!isTouch && cursorDot && cursorRing) {
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });
    (function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    })();

    document.querySelectorAll('a, button, input, textarea, .project-card, .cert-item').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('active'));
    });
  }

  /* ---------- 3. Navbar ---------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = document.querySelectorAll('main section[id], .hero');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-50% 0px -45% 0px' });
  sections.forEach(sec => sectionObserver.observe(sec));

  /* ---------- 4. Theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
      themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }

    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      if (themeIcon) {
        themeIcon.className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      }
    });
  }

  /* ---------- 5. Typing effect ---------- */
  const roles = [
    'B.Tech CSE Student',
    'Frontend Developer',
    'C, C++, Java & Python Programmer',
    'DSA Enthusiast',
    'Competitive Programmer (475+ Solved)'
  ];
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    let roleIndex = 0, charIndex = 0, deleting = false;

    function typeLoop() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1800);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 40 : 80);
    }
    typeLoop();
  }

  /* ---------- 6. Particle background ---------- */
  const canvas = document.getElementById('particles');
  const heroEl = document.querySelector('.hero');

  if (canvas && heroEl) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = heroEl.offsetWidth;
      canvas.height = heroEl.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particleCount = Math.min(70, Math.floor(canvas.width / 18));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });
      if (!prefersReducedMotion) requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  /* ---------- 7. Animated counters ---------- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          current += step;
          if (current >= target) {
            el.textContent = target + (target >= 475 ? '+' : '');
          } else {
            el.textContent = current;
            requestAnimationFrame(tick);
          }
        };
        tick();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- 8. Skill bar animation ---------- */
  const bars = document.querySelectorAll('.bar-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.width + '%';
        barObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => barObserver.observe(b));

  /* ---------- 9. Project filtering ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hide', !match);
      });
    });
  });

  /* ---------- 10. Contribution graph generator ---------- */
  const contribGraph = document.getElementById('contributionGraph');
  if (contribGraph) {
    const totalCells = 182; // 26 weeks * 7 days
    const opacities = [0.06, 0.2, 0.4, 0.65, 0.9];
    for (let i = 0; i < totalCells; i++) {
      const span = document.createElement('span');
      // Randomly populate realistic active GitHub contribution pattern
      const rand = Math.random();
      let level = 0;
      if (rand > 0.4) level = 1;
      if (rand > 0.65) level = 2;
      if (rand > 0.82) level = 3;
      if (rand > 0.93) level = 4;

      if (level > 0) {
        span.style.background = `rgba(56, 189, 248, ${opacities[level]})`;
        span.style.boxShadow = `0 0 6px rgba(56, 189, 248, ${opacities[level] * 0.5})`;
      }
      contribGraph.appendChild(span);
    }
  }

  /* ---------- 11. FAQ accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- 12. Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    const validators = {
      name: (v) => v.trim().length >= 2 || 'Please enter your name.',
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email address.',
      subject: (v) => v.trim().length >= 3 || 'Please enter a subject.',
      message: (v) => v.trim().length >= 10 || 'Message should be at least 10 characters.'
    };

    function validateField(field) {
      const input = document.getElementById(field);
      const errorEl = document.getElementById(field + 'Error');
      if (!input || !errorEl) return true;
      const result = validators[field](input.value);
      const group = input.closest('.form-group');
      if (result === true) {
        group.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
      } else {
        group.classList.add('invalid');
        errorEl.textContent = result;
        return false;
      }
    }

    Object.keys(validators).forEach(field => {
      const input = document.getElementById(field);
      if (input) {
        input.addEventListener('blur', () => validateField(field));
        input.addEventListener('input', () => {
          if (input.closest('.form-group').classList.contains('invalid')) validateField(field);
        });
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const allValid = Object.keys(validators).map(validateField).every(Boolean);
      if (!allValid) return;

      sendBtn.classList.add('loading');
      if (formSuccess) formSuccess.classList.remove('show');

      setTimeout(() => {
        sendBtn.classList.remove('loading');
        if (formSuccess) {
          formSuccess.textContent = "Thank you, Ajit has received your message and will respond shortly!";
          formSuccess.classList.add('show');
        }
        form.reset();
        setTimeout(() => {
          if (formSuccess) formSuccess.classList.remove('show');
        }, 5000);
      }, 1200);
    });
  }

  /* ---------- 13. Scroll to top ---------- */
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 14. AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

});
