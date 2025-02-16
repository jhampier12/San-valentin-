// Array de 50 canciones de Anuel AA, Romeo Santos y Juhn (canciones románticas)
const canciones = [
  // ======================
  // Anuel AA (20 canciones)
  { 
    letra: "Cuando el ritmo te envuelve y la noche se enciende, ella busca perderse sin ataduras.",
    opciones: ["Ella Quiere Beber (Remix)", "Mi Orgullo", "Secreto", "Bubalu"],
    respuesta: "Ella Quiere Beber (Remix)",
    audio: "music/ella_quiere_beber.mp3"
  },
  { 
    letra: "Entre besos prohibidos y verdades ocultas se refleja el orgullo de un amor complicado.",
    opciones: ["Mi Orgullo", "Amanece", "Culpables", "Delincuente"],
    respuesta: "Mi Orgullo",
    audio: "music/mi_orgullo.mp3"
  },
  { 
    letra: "En la oscuridad se esconde lo prohibido, un pacto de silencio entre dos corazones.",
    opciones: ["Secreto", "Sola (Remix)", "Hipócrita", "Narcos"],
    respuesta: "Secreto",
    audio: "music/secreto.mp3"
  },
  { 
    letra: "Con cada amanecer, un nuevo latido de pasión despierta en medio de la bruma.",
    opciones: ["Amanece", "Adictiva", "Na' Nuevo", "Reggaetonera"],
    respuesta: "Amanece",
    audio: "music/amanece.mp3"
  },
  { 
    letra: "Dos almas condenadas, entre errores y deseos, caminan por un sendero sin retorno.",
    opciones: ["Culpables", "Brindemos", "Ayer 2", "Delincuente"],
    respuesta: "Culpables",
    audio: "music/culpables.mp3"
  },
  { 
    letra: "Palabras dulces y mentiras amargas revelan la doble faz de un amor traicionero.",
    opciones: ["Hipócrita", "Sola (Remix)", "Secreto", "China"],
    respuesta: "Hipócrita",
    audio: "music/hipocrita.mp3"
  },
  { 
    letra: "En medio de la multitud se siente la soledad, buscando un abrazo que no llega.",
    opciones: ["Sola (Remix)", "Bubalu", "Mi Orgullo", "Culpables"],
    respuesta: "Sola (Remix)",
    audio: "music/sola_remix.mp3"
  },
  { 
    letra: "El compás urbano y la energía del barrio se funden en un baile sin control.",
    opciones: ["Bubalu", "China", "Me Gusta", "Delincuente"],
    respuesta: "Bubalu",
    audio: "music/bubalu.mp3"
  },
  { 
    letra: "Entre miradas y seducción se esconde un enigma que invita a perderse en la pasión.",
    opciones: ["China", "Adictiva", "Hipócrita", "Fútbol y Rumba"],
    respuesta: "China",
    audio: "music/china.mp3"
  },
  { 
    letra: "Cada paso y cada gesto despiertan un deseo incontrolable, puro magnetismo.",
    opciones: ["Me Gusta", "Ella Quiere Beber (Remix)", "Na' Nuevo", "Reggaetonera"],
    respuesta: "Me Gusta",
    audio: "music/me_gusta.mp3"
  },
  { 
    letra: "Amor al filo de la ley, donde cada beso es un acto de rebeldía y pasión.",
    opciones: ["Delincuente", "Culpables", "Adictiva", "Brindemos"],
    respuesta: "Delincuente",
    audio: "music/delincuente.mp3"
  },
  { 
    letra: "Levanta la copa y celebra cada error, cada encuentro que marcó nuestras vidas.",
    opciones: ["Brindemos", "Amanece", "Ayer 2", "Mi Orgullo"],
    respuesta: "Brindemos",
    audio: "music/brindemos.mp3"
  },
  { 
    letra: "Tu presencia es un vicio del que no quiero escapar, un hechizo que atrapa sin remedio.",
    opciones: ["Adictiva", "Sola (Remix)", "Bubalu", "Keii"],
    respuesta: "Adictiva",
    audio: "music/adictiva.mp3"
  },
  { 
    letra: "Entre despedidas y promesas rotas, el destino juega con el amor en su última oportunidad.",
    opciones: ["La Última Vez", "Secreto", "Narcos", "Culpables"],
    respuesta: "La Última Vez",
    audio: "music/la_ultima_vez.mp3"
  },
  { 
    letra: "El ayer se mezcla con la melancolía de un amor que no pudo ser, recordando cada error.",
    opciones: ["Ayer 2", "Na' Nuevo", "Delincuente", "Brindemos"],
    respuesta: "Ayer 2",
    audio: "music/ayer2.mp3"
  },
  { 
    letra: "Cada experiencia se renueva en el eco de tus besos, transformando el dolor en pasión.",
    opciones: ["Na' Nuevo", "Keii", "Adictiva", "Culpables"],
    respuesta: "Na' Nuevo",
    audio: "music/na_nuevo.mp3"
  },
  { 
    letra: "La melodía de tu voz es mi medicina, un ritmo que sana y enciende mi vida.",
    opciones: ["Keii", "Fútbol y Rumba", "Me Gusta", "China"],
    respuesta: "Keii",
    audio: "music/keii.mp3"
  },
  { 
    letra: "Entre goles y ritmos vibrantes, la fiesta se desata con pasión y sabor a libertad.",
    opciones: ["Fútbol y Rumba", "Reggaetonera", "Bubalu", "Delincuente"],
    respuesta: "Fútbol y Rumba",
    audio: "music/futbol_y_rumba.mp3"
  },
  { 
    letra: "Con cada movimiento en la pista, la noche se llena de fuego y deseo sin freno.",
    opciones: ["Reggaetonera", "Amanece", "Narcos", "Adictiva"],
    respuesta: "Reggaetonera",
    audio: "music/reggaetonera.mp3"
  },
  { 
    letra: "Viviendo al límite, entre peligros y secretos, la pasión se vuelve un acto prohibido.",
    opciones: ["Narcos", "Culpables", "Delincuente", "Sola (Remix)"],
    respuesta: "Narcos",
    audio: "music/narcos.mp3"
  },
  // ======================
  // Romeo Santos – Primer grupo (10 canciones)
  { 
    letra: "Entre una copa y una mirada se esconde la invitación a lo prohibido.",
    opciones: ["Propuesta Indecente", "Eres Mía", "Imitadora", "Sobredosis"],
    respuesta: "Propuesta Indecente",
    audio: "music/propuesta_indecente.mp3"
  },
  { 
    letra: "Con la certeza de un destino sellado, te reclamo en cada suspiro y latido.",
    opciones: ["Eres Mía", "Propuesta Indecente", "Hilito", "Necio"],
    respuesta: "Eres Mía",
    audio: "music/eres_mia.mp3"
  },
  { 
    letra: "La duda se instala al ver reflejos tuyos en otros rostros, sin saber cuál es real.",
    opciones: ["Imitadora", "Sobredosis", "Propuesta Indecente", "Eres Mía"],
    respuesta: "Imitadora",
    audio: "music/imitadora.mp3"
  },
  { 
    letra: "La pasión se vuelve un exceso, una entrega total sin medida ni control.",
    opciones: ["Sobredosis", "Hilito", "Necio", "Cancioncitas de Amor"],
    respuesta: "Sobredosis",
    audio: "music/sobredosis.mp3"
  },
  { 
    letra: "Un pequeño hilo une nuestros recuerdos, revelando amor en cada detalle.",
    opciones: ["Hilito", "Necio", "Odio", "Imitadora"],
    respuesta: "Hilito",
    audio: "music/hilito.mp3"
  },
  { 
    letra: "A veces el corazón actúa sin razón, repitiendo errores de un amor infiel.",
    opciones: ["Necio", "Hilito", "Eres Mía", "Imitadora"],
    respuesta: "Necio",
    audio: "music/necio.mp3"
  },
  { 
    letra: "Pequeñas melodías encienden la esperanza de un amor puro y sincero.",
    opciones: ["Cancioncitas de Amor", "Sobredosis", "Propuesta Indecente", "Odio"],
    respuesta: "Cancioncitas de Amor",
    audio: "music/cancioncitas_de_amor.mp3"
  },
  { 
    letra: "Entre el querer y el rechazo se esconde el sabor a contradicción.",
    opciones: ["Odio", "Eres Mía", "Necio", "Hilito"],
    respuesta: "Odio",
    audio: "music/odio.mp3"
  },
  { 
    letra: "Cada movimiento tuyo es un poema, cada gesto un susurro de seducción.",
    opciones: ["Bella y Sensual", "Imitadora", "Propuesta Indecente", "Cancioncitas de Amor"],
    respuesta: "Bella y Sensual",
    audio: "music/bella_y_sensual.mp3"
  },
  { 
    letra: "En la batalla contra la soledad, me convierto en el guardián de tus sueños.",
    opciones: ["Héroe Favorito", "Eres Mía", "Sobredosis", "Necio"],
    respuesta: "Héroe Favorito",
    audio: "music/heroe_favorito.mp3"
  },
  // ======================
  // Romeo Santos – Segundo grupo (10 canciones: #11 a #20)
  { 
    letra: "Contigo cada latido encuentra respuesta en un silencio compartido.",
    opciones: ["Yo También", "7 Días", "La Diabla", "Amigo"],
    respuesta: "Yo También",
    audio: "music/yo_tambien.mp3"
  },
  { 
    letra: "Una semana entera se vuelve breve ante la intensidad de nuestro encuentro.",
    opciones: ["7 Días", "La Diabla", "Inocente", "Perjurio"],
    respuesta: "7 Días",
    audio: "music/7_dias.mp3"
  },
  { 
    letra: "Entre fuego y tentación se dibuja la imagen de una pasión prohibida.",
    opciones: ["La Diabla", "Amigo", "All Aboard", "Mi Santa"],
    respuesta: "La Diabla",
    audio: "music/la_diabla.mp3"
  },
  { 
    letra: "Entre risas y confidencias, la amistad se tiñe de un cariño profundo.",
    opciones: ["Amigo", "Inocente", "Perjurio", "No Tiene la Culpa"],
    respuesta: "Amigo",
    audio: "music/amigo.mp3"
  },
  { 
    letra: "La pureza de un amor sin malicia viste cada promesa de esperanza.",
    opciones: ["Inocente", "Mi Santa", "Carmín", "Yo También"],
    respuesta: "Inocente",
    audio: "music/inocente.mp3"
  },
  { 
    letra: "El engaño se entrelaza en un pacto roto, dejando cicatrices en el alma.",
    opciones: ["Perjurio", "7 Días", "La Diabla", "All Aboard"],
    respuesta: "Perjurio",
    audio: "music/perjurio.mp3"
  },
  { 
    letra: "Súbete a este viaje de pasión sin límites, donde el amor navega en alta mar.",
    opciones: ["All Aboard", "Inocente", "Amigo", "No Tiene la Culpa"],
    respuesta: "All Aboard",
    audio: "music/all_aboard.mp3"
  },
  { 
    letra: "Eres el refugio divino en medio del caos, la bendición que ilumina mis días.",
    opciones: ["Mi Santa", "Carmín", "Yo También", "Perjurio"],
    respuesta: "Mi Santa",
    audio: "music/mi_santa.mp3"
  },
  { 
    letra: "A veces el destino deja huellas que el amor culpa sin razón.",
    opciones: ["No Tiene la Culpa", "All Aboard", "La Diabla", "7 Días"],
    respuesta: "No Tiene la Culpa",
    audio: "music/no_tiene_la_culpa.mp3"
  },
  { 
    letra: "El color de la pasión se pinta en cada caricia, en cada suspiro prohibido.",
    opciones: ["Carmín", "Inocente", "Amigo", "Perjurio"],
    respuesta: "Carmín",
    audio: "music/carmin.mp3"
  },
  // ======================
  // Juhn – Canciones románticas (10 canciones)
  { 
    letra: "Aquel instante quedó grabado en mi piel, como un eco que nunca se olvida.",
    opciones: ["Recuerdos", "Confía", "Fragancia (con Jay Wheeler)", "Nadie Sabe"],
    respuesta: "Recuerdos",
    audio: "music/recuerdos.mp3"
  },
  { 
    letra: "Abre tu corazón sin miedo y déjate llevar por la fe de un amor sincero.",
    opciones: ["Confía", "Un Beso Tuyo", "Curiosidad", "Pocas Horas"],
    respuesta: "Confía",
    audio: "music/confia.mp3"
  },
  { 
    letra: "Entre notas y aromas se esparce el recuerdo de un amor que embriaga los sentidos.",
    opciones: ["Fragancia (con Jay Wheeler)", "Recuerdos", "En Las Nubes", "No Te Miento"],
    respuesta: "Fragancia (con Jay Wheeler)",
    audio: "music/fragancia.mp3"
  },
  { 
    letra: "En el silencio de la noche se revelan secretos que nadie puede comprender.",
    opciones: ["Nadie Sabe", "Confía", "Fragancia (con Jay Wheeler)", "Selfie"],
    respuesta: "Nadie Sabe",
    audio: "music/nadie_sabe.mp3"
  },
  { 
    letra: "El sabor de tus labios despierta un universo de emociones en cada instante.",
    opciones: ["Un Beso Tuyo", "Pocas Horas", "Curiosidad", "En Las Nubes"],
    respuesta: "Un Beso Tuyo",
    audio: "music/un_beso_tuyo.mp3"
  },
  { 
    letra: "Una pregunta muda se insinúa en el aire, revelando el deseo de saber más de ti.",
    opciones: ["Curiosidad", "Confía", "No Te Miento", "Selfie"],
    respuesta: "Curiosidad",
    audio: "music/curiosidad.mp3"
  },
  { 
    letra: "El tiempo se desvanece en instantes fugaces cuando nuestros mundos se entrelazan.",
    opciones: ["Pocas Horas", "Un Beso Tuyo", "En Las Nubes", "Fragancia (con Jay Wheeler)"],
    respuesta: "Pocas Horas",
    audio: "music/pocas_horas.mp3"
  },
  { 
    letra: "Con cada palabra sincera, mi corazón confiesa lo que las sombras ocultan.",
    opciones: ["No Te Miento", "Selfie", "Nadie Sabe", "Recuerdos"],
    respuesta: "No Te Miento",
    audio: "music/no_te_miento.mp3"
  },
  { 
    letra: "Volar sin alas es posible cuando el amor eleva el alma a alturas inexploradas.",
    opciones: ["En Las Nubes", "Fragancia (con Jay Wheeler)", "Confía", "Curiosidad"],
    respuesta: "En Las Nubes",
    audio: "music/en_las_nubes.mp3"
  },
  { 
    letra: "Capturo en una imagen la magia de nuestro instante, un reflejo de amor eterno.",
    opciones: ["Selfie", "Recuerdos", "Pocas Horas", "Un Beso Tuyo"],
    respuesta: "Selfie",
    audio: "music/selfie.mp3"
  }
];

let indiceCancion = 0;
let puntajeCancion = 0;

function mostrarCancion() {
  const cancion = canciones[indiceCancion];
  document.getElementById('letra-parcial').innerText = cancion.letra;
  const opcionesDiv = document.getElementById('opciones');
  opcionesDiv.innerHTML = '';
  cancion.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.innerText = opcion;
    boton.onclick = () => verificarCancion(opcion);
    opcionesDiv.appendChild(boton);
  });
}

function mostrarMensaje(texto) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText = texto;
  mensajeDiv.classList.add("mostrar");
  setTimeout(() => {
    mensajeDiv.classList.remove("mostrar");
    nextCancion();
  }, 2000);
}

function reproducirAudio(ruta) {
  let audio = new Audio(ruta);
  audio.play();
}

function verificarCancion(opcion) {
  const cancion = canciones[indiceCancion];
  if (opcion === cancion.respuesta) {
    puntajeCancion += 20;
    document.getElementById('puntaje').innerText = "Puntaje: " + puntajeCancion;
    reproducirAudio(cancion.audio);
    mostrarMensaje("¡Correcto! ♥");
  } else {
    mostrarMensaje("Incorrecto, ¡sigue intentándolo!");
  }
}

function nextCancion() {
  if (indiceCancion < canciones.length - 1) {
    indiceCancion++;
    mostrarCancion();
  } else {
    mostrarMensaje("¡Juego completado! Puntaje final: " + puntajeCancion);
    setTimeout(() => { 
      document.body.innerHTML = `<div style="font-size:3em; color:#e91e63; text-align:center;">
        ¡Amor, gracias por cada nota!<br><img src="images/confeti_hearts.gif" alt="Animación" style="max-width:300px;"><br>❤️❤️❤️
      </div>`;
    }, 2000);
  }
}

function volverJuego() {
  window.location.href = "juegosDeRecuerdos.html";
}

window.onload = () => {
  mostrarCancion();
};
