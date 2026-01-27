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
