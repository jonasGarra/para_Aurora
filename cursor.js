document.addEventListener("mousemove", function (e) {
  // 1. Crear el elemento
  const particle = document.createElement("div");
  particle.classList.add("mouse-particle");

  // 2. Posicionarlo donde esté el ratón
  particle.style.left = e.pageX + "px";
  particle.style.top = e.pageY + "px";

  // 3. Añadir emojis aleatorios
  const emojis = ["✨", "💖", "🎀", "🤍", "🌙", "🖤"];
  particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // 4. Añadirlo al cuerpo
  document.body.appendChild(particle);

  // 5. Borrarlo después de 1 segundo (¡IMPORTANTE para no petar la memoria!)
  setTimeout(() => {
    particle.remove();
  }, 1000);
});

// EFECTO TÁCTIL: CORAZONES AL TOCAR LA PANTALLA
document.addEventListener("click", (e) => {
  crearParticula(e.clientX, e.clientY);
});

// También para pantallas táctiles específicamente
document.addEventListener("touchstart", (e) => {
  // e.touches[0] es el primer dedo que toca la pantalla
  crearParticula(e.touches[0].clientX, e.touches[0].clientY);
});

function crearParticula(x, y) {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💖"; // O usa un array ["💖", "✨", "🎀"]
  corazon.className = "touch-heart";

  // Posicionamos donde tocó el dedo
  corazon.style.left = x + "px";
  corazon.style.top = y + "px";

  document.body.appendChild(corazon);

  // Borramos después de 1 segundo
  setTimeout(() => {
    corazon.remove();
  }, 1000);
}
