// Al cargar la página, revisamos qué cupones están gastados
document.addEventListener("DOMContentLoaded", () => {
  const cupones = document.querySelectorAll(".cupon");

  cupones.forEach((cupo) => {
    const id = cupo.id;
    // Si en el navegador dice que este ID está "gastado", lo marcamos visualmente
    if (localStorage.getItem(id) === "gastado") {
      marcarComoGastado(cupo);
    }
  });
});

function canjearCupon(id) {
  // Confirmación para que no le dé sin querer
  if (confirm("¿Seguro que quieres canjear este cupón? Solo vale una vez 💀")) {
    const elemento = document.getElementById(id);

    // 1. Guardar en la base de datos del navegador
    localStorage.setItem(id, "gastado");

    // 2. Actualizar visualmente
    marcarComoGastado(elemento);

    alert("¡Cupón canjeado! Hazle captura y mándasela a Jonas. 📸");
  }
}

function marcarComoGastado(elemento) {
  elemento.classList.add("canjeado");
  const textoEstado = elemento.querySelector(".estado");
  textoEstado.innerText = "AGOTADO ❌";
}

// FUNCIONALIDAD EXTRA PARA TI (JONAS):
// Si quieres reiniciar los cupones para probar, abre la consola (F12) y escribe:
// localStorage.clear();
// Y recarga la página.
