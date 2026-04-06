const texts = ["Full Stack Developer", "DSA Enthusiast", "Problem Solver", "Open to Opportunities"];
let i = 0, j = 0, deleting = false, paused = false;
 
function type() {
  if (paused) return;
  const current = texts[i];
  if (!deleting) {
    j++;
    document.getElementById("typing").textContent = current.substring(0, j);
    if (j === current.length) {
      deleting = true;
      paused = true;
      setTimeout(() => { paused = false; type(); }, 1800);
      return;
    }
  } else {
    j--;
    document.getElementById("typing").textContent = current.substring(0, j);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(type, deleting ? 45 : 90);
}
type();
 
// PARTICLES
(async () => {
  if (window.tsParticles) {
    await tsParticles.load("particles-js", {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 50, density: { enable: true, value_area: 900 } },
        color: { value: ["#7c5cff", "#00c6ff", "#5b3de8"] },
        links: { enable: true, color: "#7c5cff", opacity: 0.2, distance: 140, width: 1 },
        move: { enable: true, speed: 0.6, random: true, out_mode: "bounce" },
        size: { value: { min: 1, max: 2.5 } },
        opacity: { value: { min: 0.2, max: 0.6 } }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: false }
        },
        modes: {
          grab: { distance: 160, line_linked: { opacity: 0.4 } }
        }
      }
    });
  }
})();
 
// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), idx * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
 
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
// CONTACT FORM
document.querySelector('.form-submit').addEventListener('click', function() {
  const name = document.querySelector('input[type=text]').value;
  const email = document.querySelector('input[type=email]').value;
  const msg = document.querySelector('textarea').value;
  if (!name || !email || !msg) {
    this.textContent = 'Fill in all fields';
    this.style.background = '#e24b4a';
    setTimeout(() => {
      this.innerHTML = 'Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      this.style.background = '';
    }, 2000);
    return;
  }
  this.textContent = '✓ Message Sent!';
  this.style.background = 'linear-gradient(135deg,#1d9e75,#0f6e56)';
  document.querySelectorAll('input, textarea').forEach(el => el.value = '');
});
 
// NAV active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'white' : '';
    a.style.background = a.getAttribute('href') === '#' + current ? 'rgba(124,92,255,0.12)' : '';
  });
});