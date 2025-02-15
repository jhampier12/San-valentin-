const cartaCompleta = `Mi amor, este es un pequeño detalle para ti, porque cada palabra que sale de mi corazón es solo para ti.
Desde que entraste en mi vida, todo ha cambiado para mejor. Eres mi razón para sonreír cada mañana y mi refugio al final de cada día.
Te amo más de lo que las palabras pueden expresar, y aunque mi corazón late con fuerza por ti, siento que hay más amor por dar.
Cada momento contigo es un regalo, y quiero pasar toda mi vida a tu lado, compartiendo risas, abrazos y sueños.
Te prometo siempre cuidarte, respetarte y amarte con todo mi ser. Eres mi todo, mi vida, mi razón.`;
let cartaMostrada = false;
function verMas() {
  const contenido = document.getElementById('contenido-carta');
  if (!cartaMostrada) {
    contenido.innerText = cartaCompleta;
    document.getElementById('leerMas').style.display = 'none';
  }
  cartaMostrada = true;
}
function volverCarta() {
  window.location.href = "index.html";
}