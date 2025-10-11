// Select elements
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Toggle the menu when clicking the hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});
