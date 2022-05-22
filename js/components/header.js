const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');

const toggleMenu = () => {
  menu.classList.toggle('hidden');
};

menuBtn.addEventListener('click', toggleMenu);
