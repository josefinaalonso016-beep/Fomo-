const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
function scrollGallery(amount) {

  const gallery = document.getElementById("galleryTrack");

  gallery.scrollBy({
    left: amount,
    behavior: "smooth"
  });
}
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const showRegister = document.getElementById("show-register");

showRegister.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".modal-content h2").textContent = "Registrarse";

  document.querySelector(".login-btn").textContent = "Crear cuenta";

  document.querySelector(".register-text").innerHTML =
    '¿Ya tenés cuenta? <a href="#" id="show-login">Iniciar sesión</a>';
});



const perfil = {
  nombre: "Josefina",
  edad: 19,
  carrera: "Diseño",
  hobby: "dibujar",

  presentarse: function () {
    return "Hola, soy " + this.nombre + ", tengo " + this.edad + " años y estudio " + this.carrera;
  }
};
console.log(perfil.carrera)
console.log(perfil.presentarse())


const nombreAlumna = "Josefina";
let entregoTrabajo = true;
let trabajoCompleto = false;

if (entregoTrabajo && trabajoCompleto) {
  console.log(nombreAlumna + " entregó el trabajo completo.");
} else if (entregoTrabajo && !trabajoCompleto) {
  console.log(nombreAlumna + " entregó el trabajo, pero tiene que corregirlo.");
} else {
  console.log(nombreAlumna + " todavía no entregó el trabajo.");
}


const secciones = ["Inicio", "Sobre mí", "Portfolio", "Servicios", "Contacto"];

function mostrarSecciones(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log((i + 1) + ". " + lista[i]);
  }
}

mostrarSecciones(secciones);


function buscarSeccion(lista, seccionBuscada) {
  let encontrada = false;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === seccionBuscada) {
      encontrada = true;
    }
  }

  if (encontrada) {
    console.log("La sección " + seccionBuscada + " existe en el sitio.");
  } else {
    console.log("La sección " + seccionBuscada + " no existe en el sitio.");
  }
}

buscarSeccion(secciones, "Portfolio");
buscarSeccion(secciones, "Blog");

const servicios = [
  "Diseño web",
  "Branding",
  "Community management",
  "Edición de video"
];

function generarMensajeServicio(servicio) {
  return "Servicio disponible: " + servicio + ". Consultanos para más información.";
}

function generarMensajesServicios(listaServicios) {
  for (let i = 0; i < listaServicios.length; i++) {
    console.log(generarMensajeServicio(listaServicios[i]));
  }
}

generarMensajesServicios(servicios);

const producto = {
  nombre: "Agenda creativa",
  categoria: "Papelería",
  color: "Lila",
  disponible: true,
  destacado: true
};

function mostrarProducto(producto) {
  console.log("Producto: " + producto.nombre);
  console.log("Categoría: " + producto.categoria);
  console.log("Color: " + producto.color);

  if (producto.disponible) {
    console.log("Disponible: Sí");
  } else {
    console.log("Disponible: No");
  }

  if (producto.destacado) {
    console.log("Este producto aparece en la página principal.");
  }
}

mostrarProducto(producto);

const personaje = {
  nombre: "Lorax",
  rol: "Sabiduria",
  energia: "alta",
  tieneMapa: true
};

function presentarPersonaje(personaje) {
  console.log(personaje.nombre + " es una " + personaje.rol + ".");

  if (personaje.energia === "alta") {
    console.log("Está lista para comenzar la aventura.");
  } else if (personaje.energia === "media") {
    console.log("Puede avanzar, pero debería descansar pronto.");
  } else if (personaje.energia === "baja") {
    console.log("Necesita recuperar energía antes de seguir.");
  }

  if (personaje.tieneMapa) {
    console.log("Tiene un mapa para orientarse.");
  } else {
    console.log("No tiene mapa. Puede perderse.");
  }
}

presentarPersonaje(personaje);


const publicaciones = [
  {
    titulo: "Nuevo lanzamiento",
    red: "Instagram",
    estado: "aprobada"
  },
  {
    titulo: "Promo de temporada",
    red: "Facebook",
    estado: "pendiente"
  },
  {
    titulo: "Video institucional",
    red: "TikTok",
    estado: "corregir"
  }
];

function mostrarPublicaciones(lista) {
  for (let i = 0; i < lista.length; i++) {
    const publicacion = lista[i];

    if (publicacion.estado === "aprobada") {
      console.log(publicacion.titulo + " - " + publicacion.red + ": lista para publicar.");
    } else if (publicacion.estado === "pendiente") {
      console.log(publicacion.titulo + " - " + publicacion.red + ": falta aprobación.");
    } else if (publicacion.estado === "corregir") {
      console.log(publicacion.titulo + " - " + publicacion.red + ": necesita correcciones.");
    }
  }
}

mostrarPublicaciones(publicaciones);