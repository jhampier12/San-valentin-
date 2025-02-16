const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
const prompts = [
  "Dibuja nuestro primer beso",
  "Dibuja el lugar donde nos conocimos",
  "Dibuja una de nuestras vacaciones inolvidables",
  "Dibuja tu recuerdo favorito conmigo",
  "Dibuja un símbolo de nuestro amor"
];
function getRandomPrompt() {
  return prompts[Math.floor(Math.random() * prompts.length)];
}
window.onload = function() {
  document.getElementById("referencia").innerText = getRandomPrompt();
};
canvas.addEventListener('mousedown', iniciarDibujo);
canvas.addEventListener('mousemove', dibujar);
canvas.addEventListener('mouseup', detenerDibujo);
canvas.addEventListener('mouseout', detenerDibujo);
function iniciarDibujo(e) {
  isDrawing = true;
  dibujar(e);
}
function dibujar(e) {
  if (!isDrawing) return;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}
function detenerDibujo() {
  isDrawing = false;
  ctx.beginPath();
}
function terminarDibujo() {
  // Al terminar, muestra animación de "Ganaste mi corazón" con confeti y muchos corazones.
  document.body.innerHTML = `<div style="font-size:3em; color:#e91e63; text-align:center;">
    ¡Ganaste mi corazón, amor!<br>
    <img src="images/confeti_hearts.gif" alt="Animación" style="max-width:300px;">
  </div>`;
  // (Asegúrate de tener un gif llamado confeti_hearts.gif en la carpeta images)
}
function volverJuego() {
  window.location.href = "juegosDeRecuerdos.html";
}
