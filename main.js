const hamburger = document.getElementById('hamburger');
const navsection = document.getElementById('nav_sections');

hamburger.addEventListener('click', () => {
    navsection.classList.toggle('show');
});