// 10 preguntas fijas
const preguntas = [
  { pregunta: "¿En qué año celebramos nuestro primer aniversario?", opciones: ["2019", "2020", "2021", "2024"], respuesta: "2024" },
  { pregunta: "¿Cuál es nuestra canción favorita?", opciones: ["Recuerdos de Juhn", "All of Me", "Perfect", "A Thousand Years"], respuesta: "Recuerdos de Juhn" },
  { pregunta: "¿En qué lugar tuvimos nuestra primera cita?", opciones: ["En el parque", "En un café", "En el cine", "En la playa"], respuesta: "En el parque" },
  { pregunta: "¿Cuál es el apodo que más te gusta que te diga?", opciones: ["Gordita", "Gatita", "Mor", "Mi amor"], respuesta: "Mi amor" },
  { pregunta: "¿Qué color es el que más te gusta ver en un ramo de flores?", opciones: ["Rojo", "Blanco", "Rosa", "Amarillo"], respuesta: "Amarillo" },
  { pregunta: "¿Cuál fue el primer regalo que me diste?", opciones: ["Un libro", "Un perfume", "Un anillo", "Oso de peluche"], respuesta: "Oso de peluche" },
  { pregunta: "¿Qué tipo de película prefieres ver juntos?", opciones: ["Comedia", "Drama", "Acción", "Documentales"], respuesta: "Comedia" },
  { pregunta: "¿Qué lugar siempre quisimos visitar juntos?", opciones: ["París", "Bali", "Tokio", "Playas"], respuesta: "Playas" },
  { pregunta: "¿Qué gesto romántico te gusta más?", opciones: ["Abrazos sorpresa", "Cartas de amor", "Cenas a la luz de las velas", "Paseos bajo las estrellas"], respuesta: "Cartas de amor" },
  { pregunta: "¿Cómo te gustaría que fuera nuestra boda?", opciones: ["En la playa", "En una iglesia", "En un jardín", "En un salón de eventos"], respuesta: "En un jardín" }
];

let indicePregunta = 0;
let puntaje = 0;
function mostrarPregunta() {
  const preg = preguntas[indicePregunta];
  document.getElementById('pregunta').innerText = preg.pregunta;
  const opcionesDiv = document.getElementById('opciones');
  opcionesDiv.innerHTML = '';
  preg.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.innerText = opcion;
    boton.onclick = () => verificarRespuesta(opcion);
    opcionesDiv.appendChild(boton);
  });
}
function mostrarMensaje(texto) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText = texto;
  mensajeDiv.classList.add("mostrar");
  setTimeout(() => {
    mensajeDiv.classList.remove("mostrar");
    nextQuestion();
  }, 2000);
}
function verificarRespuesta(opcion) {
  const preg = preguntas[indicePregunta];
  if (opcion === preg.respuesta) {
    puntaje += 20;
    document.getElementById('puntaje').innerText = "Puntaje: " + puntaje;
    mostrarMensaje("¡Ganaste, amor! ♥");
  } else {
    mostrarMensaje("Incorrecto, ¡sigue intentándolo!");
  }
}
function nextQuestion() {
  if (indicePregunta < preguntas.length - 1) {
    indicePregunta++;
    mostrarPregunta();
  } else {
    mostrarMensaje("¡Juego completado! Puntaje final: " + puntaje);
    setTimeout(() => { 
      // Al terminar, rediseñar la página para mostrar la animación final en grande
      document.body.innerHTML = `<div style="font-size:3em; color:#e91e63; text-align:center;">
        ¡Ganaste, amor! <br><img src="images/confeti.gif" alt="Confeti"><br>❤️❤️❤️
      </div>`;
    }, 2000);
  }
}
function volverJuego() {
  window.location.href = "juegosDeRecuerdos.html";
}
mostrarPregunta();
