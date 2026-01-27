document.addEventListener("DOMContentLoaded", () => {
  // 1. EL ARRAY DE RAZONES (¡Rellénalo tú con cosas personales!)
  const razones = [
    "Por cómo te brillan los ojos cuando sonríes.",
    "Porque eres mi jugadora 1 en este juego de la vida.",
    "Por tu risa, que es mi canción favorita.",
    "Porque aguantas mis frikadas de programación.",
    "Porque eres la Luna que ilumina mi noche.",
    "Por cómo me abrazas cuando más lo necesito.",
    "Porque contigo hasta el lunes parece viernes.",
    "Simplemente, porque eres Aurora.",
    "Porque haces que mi código compile a la primera (casi siempre).",
  ];

  const btn = document.getElementById("btn-generar");
  const texto = document.getElementById("frase-texto");

  if (btn && texto) {
    btn.addEventListener("click", () => {
      // Efecto visual: desvanecer texto
      texto.style.opacity = 0;

      setTimeout(() => {
        // Lógica matemática para elegir uno al azar
        const indiceAleatorio = Math.floor(Math.random() * razones.length);
        texto.innerText = `"${razones[indiceAleatorio]}"`;

        // Reaparecer texto
        texto.style.opacity = 1;
      }, 300); // Espera 300ms para cambiar el texto
    });
  }
});
