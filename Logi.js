const botonArriba = document.querySelector('.btn-volver-arriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    botonArriba.classList.add('visible');
  } else {
    botonArriba.classList.remove('visible');
  }
});
