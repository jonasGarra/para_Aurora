document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const mensajeTexto = this.querySelector("textarea").value;
  const webhookURL = "TU_URL_DE_WEBHOOK_AQUÍ"; // Pega aquí la URL de Discord
  const widget = document.getElementById("secretWidget");
  const btnToggle = document.getElementById("widgetToggle");

  const data = {
    username: "Web de Aurora 🎀",
    avatar_url: "https://api.iconify.design/logos:hello-kitty.svg",
    content: `**¡Aurora te ha enviado un mensaje!** 💀💖\n> ${mensajeTexto}`,
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      alert("¡Mensaje enviado con éxito! ❤️");
      this.reset();
    })
    .catch((err) => {
      console.error("Error al enviar:", err);
      alert("Algo falló, pero te sigo queriendo.");
    });
});

// Función para abrir/cerrar
btnToggle.addEventListener("click", () => {
  widget.classList.toggle("active");
});

// Opcional: Cerrar si hace clic fuera del widget
document.addEventListener("click", (event) => {
  const isClickInside = widget.contains(event.target);
  if (!isClickInside && widget.classList.contains("active")) {
    widget.classList.remove("active");
  }
});

// Tu lógica de envío de Discord que ya tenemos...
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // ... (aquí el código de Fetch a Discord que te pasé antes)

  // Al terminar de enviar, cerramos el widget
  widget.classList.remove("active");
});
