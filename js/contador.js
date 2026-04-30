document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // CONFIGURACIÓN: FECHA DE INICIO
    // ==========================================
    // Formato: AAAA-MM-DD (Año-Mes-Día)
    // Ejemplo: 20 de Noviembre de 2023
    const fechaInicio = new Date("2025-12-21"); 

    // Referencias al DOM (HTML)
    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMin = document.getElementById("minutos");
    const elSeg = document.getElementById("segundos");

    // Función principal del contador
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        // Si la fecha es futura (error), no hacemos nada
        if (diferencia < 0) return;

        // Cálculos matemáticos (Milisegundos -> Tiempo legible)
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualizamos el HTML añadiendo un '0' si es menor de 10
        if (elDias) elDias.innerText = dias < 10 ? "0" + dias : dias;
        if (elHoras) elHoras.innerText = horas < 10 ? "0" + horas : horas;
        if (elMin) elMin.innerText = minutos < 10 ? "0" + minutos : minutos;
        if (elSeg) elSeg.innerText = segundos < 10 ? "0" + segundos : segundos;
    }

    // Intervalo: Ejecutar cada 1000ms (1 segundo)
    setInterval(actualizarContador, 1000);
    
    // Ejecución inmediata para evitar el retardo inicial
    actualizarContador();
});