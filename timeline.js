// Simula 100 tarjetas (ejemplo con 6; amplía según sea necesario)
let tarjetas = [
  { fecha: "10 de octubre, 2023", descripcion: "Nuestra primera cita 💕", tipo: "img", archivo: "foto1.jpg" },
  { fecha: "13 de octubre, 2024", descripcion: "Nuestro primer beso juntos💘", tipo: "video", archivo: "video1.mp4" },
  { fecha: " 31 de diciembre, 2023", descripcion: "Nuestro primer año nuevo 2024💖", tipo: "video", archivo: "video2.mp4"},
  { fecha: "28 de julio, 2024", descripcion: "cumple años de mi hermana la betzy 🌟", tipo: "video", archivo: "video3.mp4" },
  { fecha: "19 de septiembre, 2024", descripcion: " Nuestro paseo a simbal donde quedo marcado nuestra promesa 💖", tipo: "img", archivo: "foto2.jpg" },
  { fecha: "25 de diciembre, 2024", descripcion: "Navidad juntos, un recuerdo increíble 🎄", tipo: 
  "foto", archivo: "foto3.jpg" },
  
  { fecha: "2025", descripcion: " Nos falta muchos mas momentos, yose que lo que puse aqui, son muy pocos, porque tenemos mucho mas y no quiero mucho mos mas contigo y te quiero decir que no te rindas amor nos falta mucho camino y momentos que yo quiero seguir viviendo contigo 💖 ", tipo: "video", archivo: "video5.mp4" }
];
let tarjetaActual = 0;
// Para reproducir la música, se requiere interacción; se intenta reproducir al primer clic.
const audioElement = document.getElementById("musicaTimeline");
document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", function() {
    audioElement.play().catch(err => console.log("Error reproduciendo música:", err));
  }, { once: true });
});
function actualizarTarjeta() {
  let tarjeta = tarjetas[tarjetaActual];
  let container = document.getElementById('tarjetas-container');
  let contenido = `
    <div class="card">
      <h2>${tarjeta.fecha}</h2>
      <p>${tarjeta.descripcion}</p>
      ${
        tarjeta.tipo === "img"
          ? `<img src="${tarjeta.archivo}" alt="Imagen">`
          : `<video controls><source src="${tarjeta.archivo}" type="video/mp4">Tu navegador no soporta videos.</video>`
      }
      <div class="nav-buttons">
        <button onclick="anteriorTarjeta()">⬅ Anterior</button>
        <button onclick="siguienteTarjeta()">Siguiente ➡</button>
      </div>
    </div>
  `;
  container.innerHTML = contenido;
}
function siguienteTarjeta() {
  if (tarjetaActual < tarjetas.length - 1) {
    tarjetaActual++;
    actualizarTarjeta();
  }
}
function anteriorTarjeta() {
  if (tarjetaActual > 0) {
    tarjetaActual--;
    actualizarTarjeta();
  }
}
function volver() {
  audioElement.pause();
  audioElement.currentTime = 0;
  window.location.href = "index.html";
}
actualizarTarjeta();
