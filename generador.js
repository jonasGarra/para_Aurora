document.addEventListener("DOMContentLoaded", () => {
  const razones = [
    "Por cómo te brillan los ojos cuando sonríes",
    "Eres mi Luna que me ilumina en las noches",
    "Porque eres la mas bella",
    "Porque me aguantas jejeje",
    "Porque contigo es diferente",
    "Pprque te quiero muchisimo",
    "Porque contigo el tiempo corre rapido",
    "Porque eres tu",
    "Eres mi todo",
    "¿Porque no? si eres perfecta",
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
