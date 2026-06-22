// ===== TYPED EFFECT =====
const words = ['Informatique', 'Développement Web', 'Python', 'Algorithmique'];
let wi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const word = words[wi];
  typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
  if (!deleting && ci > word.length) { deleting = true; setTimeout(type, 1500); return; }
  if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; }
  setTimeout(type, deleting ? 50 : 100);
}
type();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== MOBILE MENU =====
document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// ===== FADE IN ON SCROLL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-card, .project-card, .about-grid, .contact-grid').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Message envoyé ✓';
  btn.style.background = '#22c55e';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Envoyer le message';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});
