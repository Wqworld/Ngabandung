const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
})