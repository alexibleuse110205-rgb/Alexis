const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const form = document.querySelector('.contact-form');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Merci ! Votre message a bien été envoyé.');
    form.reset();
  });
}
