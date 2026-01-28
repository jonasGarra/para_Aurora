document.addEventListener("DOMContentLoaded", () => {
  const razones = [
    "Por cómo te brillan los ojos cuando sonríes",
    "Eres mi Luna que me ilumina en las noches",
    "Porque eres la más bella",
    "Porque me aguantas, jejeje",
    "Porque contigo es diferente",
    "Porque te quiero muchísimo",
    "Porque contigo el tiempo corre rápido",
    "Porque eres tú",
    "Eres mi todo",
    "¿Por qué no?, si eres perfecta",
    "Por tus eruptos de zombie del minecraft",
    "Porque eres mi princesa",
    "Porque el destino lo quería así",
    "Porque todavía me pongo nervioso al mirarte a los ojos",
    "Porque estás loquilla",
    "Porque el sol necesita a la luna para el eclipse",
    "Te necesito a mi lado",
    "El diablo también necesita una reina",
    "Siempre te echo de menos",
    "Porque me has hecho un amarre 😝",
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
