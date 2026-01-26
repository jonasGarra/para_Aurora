document.addEventListener("DOMContentLoaded", () => {
  // 1. Declaración de variables en el ámbito global del script
  const widget = document.getElementById("secretWidget");
  const btnToggle = document.getElementById("widgetToggle");
  const contactForm = document.getElementById("contactForm");

  // Verificación de seguridad (para evitar errores si el HTML tarda en cargar)
  if (!widget || !btnToggle || !contactForm) {
    console.error(
      "Error: No se encontraron los elementos del widget en el DOM.",
    );
    return;
  }

  // 2. Lógica para Abrir/Cerrar (Toggle)
  btnToggle.addEventListener("click", (e) => {
    // Evitamos que el clic llegue al document y active el cierre automático
    e.stopPropagation();
    widget.classList.toggle("active");
  });

  // 3. Lógica para cerrar si haces clic fuera (UX mejorada)
  document.addEventListener("click", (event) => {
    const isClickInside = widget.contains(event.target);

    // Si el clic NO fue dentro del widget Y el widget está abierto
    if (!isClickInside && widget.classList.contains("active")) {
      widget.classList.remove("active");
    }
  });

  // 4. Envío del Formulario (Webhook Discord)
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const textarea = this.querySelector("textarea");
    const mensajeTexto = textarea.value;

    // ⚠️ IMPORTANTE: ¡Cambia esto por tu URL real de Discord!
    const webhookURL = "https://discordapp.com/api/guilds/1465385579440115885/widget.json";

    if (!mensajeTexto.trim()) {
      alert("¡No puedes enviar un mensaje vacío! 🤨");
      return;
    }

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
      .then((response) => {
        if (response.ok) {
          alert("¡Mensaje enviado con éxito! ❤️");
          this.reset(); // Limpia el formulario
          widget.classList.remove("active"); // Cierra el widget automáticamente
        } else {
          alert("Hubo un error al enviar el mensaje.");
        }
      })
      .catch((err) => {
        console.error("Error de red:", err);
        alert("Algo falló, pero te sigo queriendo.");
      });
  });
});
