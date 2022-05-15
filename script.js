const menuButton = document.querySelector('.menu-hamburguer');
const header = document.querySelector('header')

menuButton.addEventListener('click', MenuToggle)

function MenuToggle(){
  header.classList.toggle('active');
}
