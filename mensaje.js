document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const mensajeTexto = this.querySelector("textarea").value;
  const webhookURL = "TU_URL_DE_WEBHOOK_AQUÍ"; // Pega aquí la URL de Discord

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
