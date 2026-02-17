// Función para abrir el sobre al hacer clic
function abrirSobre(elemento) {
  // 1. Alternamos la clase 'open' en el sobre
  elemento.classList.toggle("open");

  // 2. TRUCO PARA EL Z-INDEX (Sube el padre por encima de todo)
  // Buscamos el padre .carta-wrapper
  const padre = elemento.closest(".carta-wrapper");

  if (elemento.classList.contains("open")) {
    // Si acabamos de abrir, ponemos z-index ALTO
    padre.style.zIndex = "9999";
  } else {
    // Si acabamos de cerrar, esperamos un poco (a que baje el papel)
    // y reseteamos el z-index
    setTimeout(() => {
      padre.style.zIndex = "10";
    }, 6000); // 600ms = tiempo de la animación
  }
}
