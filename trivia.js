// 10 preguntas fijas para Trivia Romántica
const preguntasTrivia = [
  { pregunta: "¿Dónde nos conocimos por primera vez?", opciones: ["Instituto MGP", "Fiesta de amigos", "Café", "En la calle"], respuesta: "Instituto MGP" },
  { pregunta: "¿Cuál es tu lugar favorito para ir de vacaciones?", opciones: ["Playa", "Montaña", "Ciudad", "Lago"], respuesta: "Playa" },
  { pregunta: "¿Qué tipo de película prefieres ver juntos?", opciones: ["Comedia", "Acción", "Drama", "Terror"], respuesta: "Comedia" },
  { pregunta: "¿Qué color prefieres que te regale una prenda?", opciones: ["Rojo", "Azul", "Verde", "Rosa"], respuesta: "Rosa" },
  { pregunta: "¿Cuál fue el primer regalo que te di?", opciones: ["Un libro", "Un perfume", "Un anillo", "Oso de peluche"], respuesta: "Oso de peluche" },
  { pregunta: "¿Qué te hace sentir más amada?", opciones: ["Abrazos", "Palabras de amor", "Detalles", "Tiempo juntos"], respuesta: "Palabras de amor" },
  { pregunta: "¿Qué actividad disfrutas más juntos?", opciones: ["Cenar", "Ver películas", "Caminar", "Viajar"], respuesta: "Viajar" },
  { pregunta: "¿Cuál es tu recuerdo favorito conmigo?", opciones: ["Primer beso", "Vacaciones", "Cena romántica", "Un viaje especial"], respuesta: "Primer beso" },
  { pregunta: "¿Qué es lo que más valoras en nuestra relación?", opciones: ["Confianza", "Respeto", "Amor", "Diversión"], respuesta: "Amor" },
  { pregunta: "¿Cómo imaginas nuestro futuro juntos?", opciones: ["En paz", "Lleno de aventuras", "Con familia", "Todo lo anterior"], respuesta: "Todo lo anterior" }
];

let indiceTrivia = 0;
let puntajeTrivia = 0;
function mostrarPreguntaTrivia() {
  const preg = preguntasTrivia[indiceTrivia];
  document.getElementById('pregunta').innerText = preg.pregunta;
  const opcionesDiv = document.getElementById('opciones');
  opcionesDiv.innerHTML = '';
  preg.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.innerText = opcion;
    boton.onclick = () => verificarRespuestaTrivia(opcion);
    opcionesDiv.appendChild(boton);
  });
}
function mostrarMensaje(texto) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText = texto;
  mensajeDiv.classList.add("mostrar");
  setTimeout(() => {
    mensajeDiv.classList.remove("mostrar");
    nextQuestionTrivia();
  }, 2000);
}
function verificarRespuestaTrivia(opcion) {
  const preg = preguntasTrivia[indiceTrivia];
  if (opcion === preg.respuesta) {
    puntajeTrivia += 20;
    document.getElementById('puntaje').innerText = "Puntaje: " + puntajeTrivia;
    mostrarMensaje("¡Correcto, amor! ♥");
  } else {
    mostrarMensaje("Incorrecto, intenta de nuevo.");
  }
}
function nextQuestionTrivia() {
  if (indiceTrivia < preguntasTrivia.length - 1) {
    indiceTrivia++;
    mostrarPreguntaTrivia();
  } else {
    mostrarMensaje("¡Trivia completada! Puntaje final: " + puntajeTrivia);
    setTimeout(() => {
      // Animación final romántica (por ejemplo, confeti y corazones)
      document.body.innerHTML = `<div style="font-size:3em; color:#e91e63; text-align:center;">
      ¡Amor, eres lo mejor!<br><img src="images/confeti_hearts.gif" alt="Animación" style="max-width:300px;"><br>❤️❤️❤️
      </div>`;
    }, 2000);
  }
}
function volverJuego() {
  window.location.href = "juegosderecuerdos.html";
}
mostrarPreguntaTrivia();
