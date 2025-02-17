const imagenesRompecabezas = [
  { id: 1, nombre: "Imagen 1", ruta: "imagen1.jpg", piezas: 9, tiempo: 90 },
  { id: 2, nombre: "Imagen 2", ruta: "imagen2.jpg", piezas: 16, tiempo: 120 },
  { id: 3, nombre: "Imagen 3", ruta: "imagen3.jpg", piezas: 25, tiempo: 150 },
  { id: 4, nombre: "Imagen 4", ruta: "imagen4.jpg", piezas: 36, tiempo: 150 },
  { id: 5, nombre: "Imagen 5", ruta: "imagen5.jpg", piezas: 49, tiempo: 150 }
];

let tiempoRestante, temporizadorInterval;

function seleccionarImagen(id) {
  const imagen = imagenesRompecabezas.find(img => img.id === id);
  if (imagen) {
    document.getElementById('imagen-selector').classList.add('hidden');
    document.getElementById('rompecabezas-container').classList.remove('hidden');
    iniciarTemporizador(imagen.tiempo);
    crearPuzzle(imagen);
  }
}

function iniciarTemporizador(segundos) {
  tiempoRestante = segundos;
  document.getElementById('temporizador').innerText = `Tiempo: ${tiempoRestante}s`;
  temporizadorInterval = setInterval(() => {
    tiempoRestante--;
    document.getElementById('temporizador').innerText = `Tiempo: ${tiempoRestante}s`;
    if (tiempoRestante <= 0) {
      clearInterval(temporizadorInterval);
      mostrarMensaje("¡Tiempo agotado! Pero lo importante es nuestro amor.", null);
    }
  }, 1000);
}

function crearPuzzle(imagen) {
  // Determinar filas y columnas a partir de imagen.piezas (suponemos cuadrado)
  let total = imagen.piezas;
  let cols = Math.sqrt(total);
  let rows = cols;
  document.documentElement.style.setProperty('--cols', cols);
  document.documentElement.style.setProperty('--rows', rows);
  
  const sourceContainer = document.getElementById('puzzle-source');
  const targetContainer = document.getElementById('puzzle-target');
  sourceContainer.innerHTML = '';
  targetContainer.innerHTML = '';
  
  let img = new Image();
  img.src = imagen.ruta;
  img.onload = () => {
    const pieceWidth = img.width / cols;
    const pieceHeight = img.height / rows;
    let pieces = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.draggable = true;
        piece.style.backgroundImage = `url(${imagen.ruta})`;
        piece.style.backgroundSize = `${cols * 60}px ${rows * 60}px`;
        piece.style.backgroundPosition = `-${x * 60}px -${y * 60}px`;
        piece.dataset.index = y * cols + x;
        pieces.push(piece);
      }
    }
    // Mezclar las piezas
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(piece => {
      sourceContainer.appendChild(piece);
      piece.addEventListener('dragstart', dragStart);
    });
    // Crear celdas vacías en el target
    for (let i = 0; i < total; i++) {
      let cell = document.createElement('div');
      cell.classList.add('puzzle-piece');
      cell.style.border = "2px dashed #ccc";
      cell.dataset.index = i;
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('drop', drop);
      targetContainer.appendChild(cell);
    }
  };
}

let draggedPiece = null;
function dragStart(e) {
  draggedPiece = e.target;
}
function dragOver(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  if (!e.target.hasChildNodes()) {
    e.target.appendChild(draggedPiece);
    comprobarPuzzle();
  }
}
function comprobarPuzzle() {
  const targetContainer = document.getElementById('puzzle-target');
  let correct = true;
  Array.from(targetContainer.children).forEach((cell, i) => {
    if (cell.firstChild) {
      let pieceIndex = cell.firstChild.dataset.index;
      if (parseInt(pieceIndex) !== i) {
        correct = false;
      }
    } else {
      correct = false;
    }
  });
  if (correct) {
    clearInterval(temporizadorInterval);
    // Mostrar la imagen completa con confeti y corazones
    mostrarMensaje("¡Ganaste mi corazón ❤ amor!", "gato_feliz.gif");
    // Aquí se podría agregar animación de confeti y corazones
  }
}
function mostrarMensaje(texto, gif) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerHTML = texto;
  if (gif) {
    mensajeDiv.innerHTML += `<br><img src="../images/${gif}" alt="Animación" style="max-width:100px;">`;
  }
  mensajeDiv.classList.add("mostrar");
  setTimeout(() => {
    mensajeDiv.classList.remove("mostrar");
    volverJuego();
  }, 2000);
}
function reiniciarRompecabezas() {
  clearInterval(temporizadorInterval);
  document.getElementById('rompecabezas-container').classList.add('hidden');
  document.getElementById('imagen-selector').classList.remove('hidden');
}
function volverJuego() {
  window.location.href = "juegosderecuerdos.html";
}
