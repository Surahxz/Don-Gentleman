const toggle = document.getElementById('barbershop-menu-toggle');
const menu = document.querySelector('.menu-lista');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.querySelector('i').classList.toggle('fa-bars');
    toggle.querySelector('i').classList.toggle('fa-xmark');
});