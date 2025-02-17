const password = "1310"; // Contraseña establecida
function verificarCodigo() {
  const codigo = document.getElementById('codigo').value;
  if (codigo === password) {
    mostrarMensaje("¡Abriste mi corazón, amor!", "gato_feliz.gif");
    // Luego, iniciar una animación de lluvia de corazones
    iniciarLluviaCorazones();
  } else {
    mostrarMensaje("Código incorrecto, ¡sigue intentándolo!", null);
  }
}
function mostrarMensaje(texto, gif) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerHTML = texto;
  if (gif) {
    mensajeDiv.innerHTML += `<br><img src="${gif}" alt="Animación" style="max-width:200px;">`;
  }
  mensajeDiv.classList.add("mostrar");
  setTimeout(() => {
    mensajeDiv.classList.remove("mostrar");
    if (texto.toLowerCase().includes("incorrecto")) {
      // Permitir reintento sin avanzar
    } else {
      // Después de 2 minutos, desaparecerá el gif y se mostrarán 5 fotos secuenciales con música de fondo
      setTimeout(() => {
        mostrarSecuenciaFotos();
      }, 120000); // 120000 ms = 2 minutos
    }
  }, 2000);
}
function iniciarLluviaCorazones() {
  // Simula lluvia de corazones con animación CSS o creando elementos
  let container = document.getElementById("mensaje");
  container.innerHTML += `<div class="corazones-lluvia"></div>`;
  // La animación en CSS debe estar definida para .corazones-lluvia
}
function mostrarSecuenciaFotos() {
  // Mostrar 5 fotos secuenciales en el mismo lugar con música de fondo.
  const container = document.getElementById("mensaje");
  container.innerHTML = "";
  const fotos = ["fondo.jpg", "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];
  let indice = 0;
  const interval = setInterval(() => {
    container.innerHTML = `<img src="${fotos[indice]}" alt="Foto" style="max-width:30px;">`;
    indice++;
    if (indice >= fotos.length) {
      clearInterval(interval);
    }
  }, 2000); // cada 2 segundos cambia la foto
  // Reproducir música de fondo para la secuencia
  let audio = new Audio("Juhn - Recuerdos (Letra).mp3");
  audio.play();
}
function volverJuego() {
  window.location.href = "juegosderecuerdos.html";
}
