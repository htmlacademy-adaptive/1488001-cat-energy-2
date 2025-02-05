// БУРГЕР-МЕНЮ
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

nav.classList.add('nav--closed');

navToggle.addEventListener('click', ()=> {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});

