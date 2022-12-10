const ham = document.querySelector('.ham');
const enlace = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlace.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});

