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
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
      navMenu.classList.toggle('open', isOpen);
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = (isOpen && window.innerWidth <= 768) ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => toggleMenu());

    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
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

  /* ---------- Central Coding Stats Model ---------- */
  window.codingStats = {
    leetcode: 501,
    gfg: 95,
    codechef: 600
  };

  function getTotalProblemsSolved() {
    return (
      (window.codingStats.leetcode || 0) +
      (window.codingStats.gfg || 0) +
      (window.codingStats.codechef || 0)
    );
  }

  /* ---------- 5. Typing effect ---------- */
  const roles = [
    'Full Stack Developer',
    'Competitive Programmer',
    'Software Engineering Learner',
    'DSA Enthusiast'
  ];
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    let roleIndex = 0, charIndex = 0, deleting = false;

    function typeLoop() {
      const current = roles[roleIndex % roles.length];
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
  function runCounterAnimation(el, customTarget) {
    const target = customTarget !== undefined ? customTarget : parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    el.dataset.target = target;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const tick = () => {
      current += step;
      if (current >= target) {
        el.textContent = target + (target >= 400 ? '+' : '');
      } else {
        el.textContent = current;
        requestAnimationFrame(tick);
      }
    };
    tick();
  }

  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounterAnimation(entry.target);
        counterObserver.unobserve(entry.target);
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

  /* ---------- 10. Platform Heatmap Generator (User Handle Seeded & Live) ---------- */
  function renderSeededHeatmapGraph(containerId, colorRGB, handle, totalSolved) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    const totalCells = 140; // 20 columns * 7 rows
    const opacities = [0.05, 0.3, 0.55, 0.8, 1.0];

    // Create deterministic hash from platform user handle
    let hash = 0;
    for (let i = 0; i < handle.length; i++) hash = (hash << 5) - hash + handle.charCodeAt(i);
    hash = Math.abs(hash);

    for (let i = 0; i < totalCells; i++) {
      const span = document.createElement('span');
      const pseudoRand = ((hash + i * 31 + (i % 7) * 17) % 100) / 100;
      let level = 0;
      if (pseudoRand > 0.42) level = 1;
      if (pseudoRand > 0.68) level = 2;
      if (pseudoRand > 0.86) level = 3;
      if (pseudoRand > 0.95) level = 4;

      if (level > 0) {
        span.style.background = `rgba(${colorRGB}, ${opacities[level]})`;
        span.style.boxShadow = `0 0 6px rgba(${colorRGB}, ${opacities[level] * 0.4})`;
      } else {
        span.style.background = 'rgba(255, 255, 255, 0.05)';
      }
      el.appendChild(span);
    }
  }

  // Generate initial handle-seeded heatmaps matching user profile IDs
  renderSeededHeatmapGraph('contributionGraph', '0, 242, 254', 'ajitkumarsaini02', 1136);      // GitHub
  renderSeededHeatmapGraph('leetcodeContributionGraph', '245, 158, 11', 'ajitkumarsaini02', 501);  // LeetCode
  renderSeededHeatmapGraph('codechefContributionGraph', '56, 189, 248', 'ajitsaini94', 600);     // CodeChef

  // Live GitHub Contributions API for ajitkumarsaini02
  async function fetchLiveGitHubContributions() {
    try {
      const res = await fetch('https://github-contributions-api.jogruber.de/v4/ajitkumarsaini02?y=last');
      if (res.ok) {
        const data = await res.json();
        if (data && data.total && data.total.lastYear !== undefined) {
          document.querySelectorAll('[data-stat="github-total"]').forEach(el => el.textContent = data.total.lastYear);
        }
        if (data && Array.isArray(data.contributions) && data.contributions.length > 0) {
          const contribs = data.contributions.slice(-140); // Last 140 days
          const ghEl = document.getElementById('contributionGraph');
          if (ghEl) {
            ghEl.innerHTML = '';
            contribs.forEach(c => {
              const span = document.createElement('span');
              const count = c.count || 0;
              if (count > 0) {
                let opacity = 0.3;
                if (count > 2) opacity = 0.55;
                if (count > 5) opacity = 0.8;
                if (count > 8) opacity = 1.0;
                span.style.background = `rgba(0, 242, 254, ${opacity})`;
                span.style.boxShadow = `0 0 6px rgba(0, 242, 254, ${opacity * 0.5})`;
                span.title = `${c.date}: ${count} contributions`;
              } else {
                span.style.background = 'rgba(255, 255, 255, 0.05)';
              }
              ghEl.appendChild(span);
            });
          }
        }
      }
    } catch (e) {
      console.log('GitHub live contrib fetch fallback');
    }
  }
  fetchLiveGitHubContributions();

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

      const nameVal = document.getElementById('name').value.trim();
      const emailVal = document.getElementById('email').value.trim();
      const subjectVal = document.getElementById('subject').value.trim();
      const messageVal = document.getElementById('message').value.trim();

      const bodyContent = `Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`;
      const mailtoUrl = `mailto:ajitkumarsaini02@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(bodyContent)}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ajitkumarsaini02@gmail.com&su=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(bodyContent)}`;

      // 1. Try launching native system email app
      const mailLink = document.createElement('a');
      mailLink.href = mailtoUrl;
      mailLink.click();

      // 2. Display success/fallback message with direct Gmail web link
      if (formSuccess) {
        formSuccess.innerHTML = `
          Opening email app...<br>
          <small style="margin-top: 6px; display: block; opacity: 0.9;">
            If your email app didn't open: 
            <a href="${gmailWebUrl}" target="_blank" rel="noopener" style="color: #00F2FE; text-decoration: underline; font-weight: 600;">Click here to open in Gmail (Web)</a> 
            or email directly to <b>ajitkumarsaini02@gmail.com</b>
          </small>
        `;
        formSuccess.classList.add('show');
      }

      form.reset();
    });
  }

  /* ---------- Mailto link handler for mail icons & links ---------- */
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const email = href.replace('mailto:', '').split('?')[0];
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      
      // Attempt system mail app launch
      window.location.href = href;

      // Fallback to Gmail Web if desktop has no default mail app
      let appOpened = false;
      const handleBlur = () => { appOpened = true; };
      window.addEventListener('blur', handleBlur, { once: true });
      setTimeout(() => {
        if (!appOpened) {
          window.open(gmailUrl, '_blank');
        }
      }, 500);
    });
  });

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

  /* ---------- 15. Live Coding Profile Stats Auto-Sync ---------- */
  async function fetchLiveCodingStats() {
    const LEETCODE_USER = 'ajitkumarsaini02';

    function updateStatElements(type, val) {
      document.querySelectorAll(`[data-stat="${type}"]`).forEach(el => {
        if (el.classList.contains('counter')) {
          runCounterAnimation(el, val);
        } else {
          el.textContent = val + (type === 'lc-solved' ? '+' : '');
        }
      });

      if (type === 'lc-solved') {
        if (window.codingStats) window.codingStats.leetcode = parseInt(val, 10) || val;
        document.querySelectorAll('[data-stat="lc-solved-title"]').forEach(el => el.textContent = `${val}+ LeetCode Problems`);
        document.querySelectorAll('[data-stat="lc-solved-desc"]').forEach(el => el.textContent = `Solved ${val}+ Data Structures and Algorithms problems on LeetCode.`);
        document.querySelectorAll('[data-stat="lc-solved-list"]').forEach(el => el.innerHTML = `<i class="fa-solid fa-check"></i> Solved ${val}+ LeetCode DSA problems`);
        document.querySelectorAll('[data-stat="lc-solved-ring"]').forEach(el => el.innerHTML = `${val}+<small>solved (live)</small>`);
      }

      if (type === 'lc-rating') {
        document.querySelectorAll('[data-stat="lc-rating-title"]').forEach(el => el.textContent = `LeetCode Rating ${val}`);
        document.querySelectorAll('[data-stat="lc-rating-val"]').forEach(el => el.textContent = val);
      }

      if (type === 'lc-highest') {
        document.querySelectorAll('[data-stat="lc-highest-val"]').forEach(el => el.textContent = val);
      }

      if (type === 'cc-rating') {
        const num = parseInt(val, 10);
        const stars = num >= 2500 ? '7★' : num >= 2200 ? '6★' : num >= 2000 ? '5★' : num >= 1800 ? '4★' : num >= 1600 ? '3★' : num >= 1400 ? '2★' : '1★';
        document.querySelectorAll('[data-stat="cc-rating-title"]').forEach(el => el.textContent = `CodeChef ${stars} Coder (${val})`);
        document.querySelectorAll('[data-stat="cc-rating-val"]').forEach(el => el.textContent = val);
        document.querySelectorAll('[data-stat="cc-stars-val"]').forEach(el => el.textContent = stars);
      }

      if (type === 'gfg-solved') {
        const count = parseInt(val, 10);
        if (window.codingStats) window.codingStats.gfg = count;
        document.querySelectorAll('[data-stat="gfg-solved-ring"]').forEach(el => el.innerHTML = `${count}+<small>solved (live)</small>`);
        document.querySelectorAll('[data-stat="gfg-solved-val"]').forEach(el => el.textContent = count);
      }
    }

    // 1. Fetch LeetCode Solved Count & Difficulty breakdown with multiple endpoints
    try {
      const res = await fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/solved`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.solvedProblem || data.totalSolved)) {
          const solved = data.solvedProblem || data.totalSolved;
          updateStatElements('lc-solved', solved);
          if (data.easySolved) document.querySelectorAll('[data-stat="lc-easy-val"]').forEach(el => el.textContent = data.easySolved);
          if (data.mediumSolved) document.querySelectorAll('[data-stat="lc-medium-val"]').forEach(el => el.textContent = data.mediumSolved);
          if (data.hardSolved) document.querySelectorAll('[data-stat="lc-hard-val"]').forEach(el => el.textContent = data.hardSolved);
        }
      } else {
        throw new Error('primary solved api failed');
      }
    } catch (e) {
      try {
        const res2 = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USER}`);
        if (res2.ok) {
          const data2 = await res2.json();
          if (data2 && data2.totalSolved) updateStatElements('lc-solved', data2.totalSolved);
        }
      } catch (err) {
        console.log('LeetCode solved auto-sync using fallback');
      }
    }

    // 2. Fetch LeetCode Contest Rating & Highest Rating
    try {
      const contestResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/contest`);
      if (contestResponse.ok) {
        const contestData = await contestResponse.json();
        if (contestData && contestData.contestRating) {
          const rating = Math.round(contestData.contestRating);
          updateStatElements('lc-rating', rating);
        }
        if (contestData && Array.isArray(contestData.contestParticipation)) {
          const attended = contestData.contestParticipation.filter(c => c.attended && c.rating);
          if (attended.length > 0) {
            const highest = Math.round(Math.max(...attended.map(c => c.rating)));
            updateStatElements('lc-highest', highest);
          }
        }
      }
    } catch (err) {
      console.log('LeetCode contest auto-sync using fallback');
    }

    // Fetch LeetCode Badges Live
    try {
      const badgeRes = await fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/badges`);
      if (badgeRes.ok) {
        const badgeData = await badgeRes.json();
        let latestBadgeName = '';
        if (badgeData && Array.isArray(badgeData.badges) && badgeData.badges.length > 0) {
          latestBadgeName = badgeData.badges[0].displayName;
        } else if (badgeData && badgeData.activeBadge && badgeData.activeBadge.displayName) {
          latestBadgeName = badgeData.activeBadge.displayName;
        }

        if (latestBadgeName) {
          document.querySelectorAll('[data-stat="lc-badge-title"]').forEach(el => el.textContent = `LeetCode ${latestBadgeName}`);
          document.querySelectorAll('[data-stat="lc-badge-desc"]').forEach(el => el.textContent = `Earned the LeetCode ${latestBadgeName} award.`);
          document.querySelectorAll('[data-stat="lc-badge-val"]').forEach(el => el.textContent = latestBadgeName);
        }
      }
    } catch (err) {
      console.log('LeetCode badges live fetch fallback');
    }

    // Fetch Live LeetCode Submission Activity Heatmap
    try {
      const profRes = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USER}`);
      if (profRes.ok) {
        const profData = await profRes.json();
        if (profData && profData.submissionCalendar) {
          const calObj = typeof profData.submissionCalendar === 'string' ? JSON.parse(profData.submissionCalendar) : profData.submissionCalendar;
          const timestamps = Object.keys(calObj).map(Number).sort((a, b) => a - b);
          if (timestamps.length > 0) {
            const lcEl = document.getElementById('leetcodeContributionGraph');
            if (lcEl) {
              lcEl.innerHTML = '';
              const totalCells = 182;
              const nowSec = Math.floor(Date.now() / 1000);
              const daySec = 86400;
              const startSec = nowSec - (totalCells * daySec);

              for (let i = 0; i < totalCells; i++) {
                const cellStart = startSec + (i * daySec);
                const cellEnd = cellStart + daySec;
                const activeCount = timestamps.filter(t => t >= cellStart && t < cellEnd).reduce((sum, t) => sum + (calObj[t] || 1), 0);

                const span = document.createElement('span');
                if (activeCount > 0) {
                  let alpha = 0.3;
                  if (activeCount > 2) alpha = 0.55;
                  if (activeCount > 5) alpha = 0.85;
                  if (activeCount > 9) alpha = 1.0;
                  span.style.background = `rgba(245, 158, 11, ${alpha})`;
                  span.style.boxShadow = `0 0 6px rgba(245, 158, 11, ${alpha * 0.5})`;
                } else {
                  span.style.background = 'rgba(255, 255, 255, 0.05)';
                }
                lcEl.appendChild(span);
              }
            }
          }
        }
      }
    } catch (err) {
      console.log('LeetCode calendar live fetch fallback');
    }

    // 3. Fetch CodeChef Rating Live
    const CODECHEF_USER = 'ajitsaini94';
    try {
      const ccRes = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.codechef.com/users/' + CODECHEF_USER)}`);
      if (ccRes.ok) {
        const ccJson = await ccRes.json();
        if (ccJson && ccJson.contents) {
          const html = ccJson.contents;
          const ratingMatch = html.match(/rating-number[^>]*>(\d+)/i) || html.match(/(\d{4})<\/div>\s*<span[^>]*>\s*\(Div/i);
          if (ratingMatch && ratingMatch[1]) {
            const ccRating = parseInt(ratingMatch[1], 10);
            updateStatElements('cc-rating', ccRating);
          }
          const highestMatch = html.match(/Highest Rating[^0-9]*(\d+)/i);
          if (highestMatch && highestMatch[1]) {
            const ccHighest = parseInt(highestMatch[1], 10);
            updateStatElements('cc-highest', ccHighest);
          }
        }
      }
    } catch (err) {
      console.log('CodeChef live fetch fallback');
    }



    // 5. Fetch GeeksforGeeks Live Solved Count
    const GFG_USER = 'ajitkumarsaini02';
    try {
      const gfgRes = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://www.geeksforgeeks.org/user/' + GFG_USER + '/')}`);
      if (gfgRes.ok) {
        const gfgHtml = await gfgRes.text();
        const solvedMatch = gfgHtml.match(/Problems\s*Solved[\s\S]*?(\d+)/i) || gfgHtml.match(/(\d+)\s*<\/div>\s*<div[^>]*>Problems\s*Solved/i) || gfgHtml.match(/score_card_left[^>]*>(\d+)/i);
        if (solvedMatch && solvedMatch[1]) {
          const gfgSolved = parseInt(solvedMatch[1], 10);
          updateStatElements('gfg-solved', gfgSolved);
        }
      }
    } catch (err) {
      console.log('GFG live fetch fallback');
    }
  }

  fetchLiveCodingStats();

  /* ---------- 14. AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

});
