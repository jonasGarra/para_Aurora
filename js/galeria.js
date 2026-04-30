document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todas las tarjetas de la galería
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // 1. Si estamos en móvil (pantallas táctiles), evitamos comportamientos raros
      // (Opcional, pero buena práctica)

      // 2. Comprobamos si esta tarjeta YA estaba abierta
      const estaAbierta = this.classList.contains("active");

      // 3. PRIMERO: Cerramos TODAS las tarjetas
      // Esto es para que solo haya una abierta a la vez (efecto acordeón)
      cards.forEach((c) => c.classList.remove("active"));

      // 4. SEGUNDO: Si la que toqué NO estaba abierta, la abro ahora
      if (!estaAbierta) {
        this.classList.add("active");
      }

      // Si estaba abierta y la toqué, el paso 3 ya la cerró, así que se queda cerrada.
      // Esto permite "abrir/cerrar" tocando la misma foto.
    });
  });
});
