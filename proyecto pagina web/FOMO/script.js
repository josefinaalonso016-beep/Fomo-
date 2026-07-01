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

if (openModal && closeModal && modal) {

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

}

const loginBtn = document.querySelector(".login-btn");
const mensaje = document.getElementById("mensaje");

document.addEventListener("click", function (e) {


  if (e.target && e.target.id === "show-register") {

    e.preventDefault();

    document.querySelector(".modal-content h2").textContent = "Registrarse";

    loginBtn.textContent = "Crear cuenta";

    document.querySelector(".register-text").innerHTML =
      '¿Ya tenés cuenta? <a href="#" id="show-login">Iniciar sesión</a>';

    mensaje.style.display = "none";
  }


  if (e.target && e.target.id === "show-login") {

    e.preventDefault();

    document.querySelector(".modal-content h2").textContent = "Iniciar sesión";

    loginBtn.textContent = "Ingresar";

    document.querySelector(".register-text").innerHTML =
      '¿No tenés cuenta? <a href="#" id="show-register">Registrate</a>';

    mensaje.style.display = "none";
  }

});


if (loginBtn) {

  loginBtn.addEventListener("click", () => {

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {

      mensaje.style.display = "block";
      mensaje.style.color = "red";
      mensaje.textContent = "Completá todos los campos.";

      return;
    }

    mensaje.style.display = "block";
    mensaje.style.color = "#3F523F";

    if (loginBtn.textContent === "Crear cuenta") {

      mensaje.textContent = "¡Te registraste correctamente! ☕";

    } else {

      mensaje.textContent = "¡Iniciaste sesión correctamente! ☕";

    }

    document.querySelector('input[type="email"]').value = "";
    document.querySelector('input[type="password"]').value = "";

  });

}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  const contactMensaje = document.getElementById("contactMensaje");

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = contactForm.querySelector('input[placeholder="Nombre"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const asunto = contactForm.querySelector('input[placeholder="Asunto"]').value.trim();

    if (nombre === "" || email === "") {

      contactMensaje.style.display = "block";
      contactMensaje.style.color = "red";
      contactMensaje.textContent = "Completá todos los campos obligatorios.";

      return;
    }

    contactMensaje.style.display = "block";
    contactMensaje.style.color = "#3F523F";
    contactMensaje.textContent = "¡Tu mensaje fue enviado correctamente! Gracias por contactarnos ☕";

    contactForm.reset();

  });

}

const stars = document.querySelectorAll(".star");
const ratingMessage = document.getElementById("ratingMessage");

if (stars.length > 0) {

  stars.forEach((star) => {

    star.addEventListener("click", () => {

      const value = star.getAttribute("data-value");

      stars.forEach((s, index) => {

        if (index < value) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }

      });

      ratingMessage.textContent =
        "¡Gracias por calificarnos con " + value + " estrellas! ⭐";

    });

  });

}

const galleryImages = document.querySelectorAll(".gallery-grid img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImage = document.querySelector(".close-image");

if (galleryImages.length > 0) {

  galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

      imageModal.style.display = "flex";
      modalImage.src = img.src;

    });

  });

}

if (closeImage) {

  closeImage.addEventListener("click", () => {

    imageModal.style.display = "none";

  });

}

if (imageModal) {

  imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

      imageModal.style.display = "none";

    }

  });

}

const filterButtons = document.querySelectorAll(".filters button");
const categories = document.querySelectorAll(".menu-category");
const searchInput = document.getElementById("searchInput");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    categories.forEach((category) => {

      if (filter === "all") {

        category.style.display = "block";

      }

      else if (category.classList.contains(filter)) {

        category.style.display = "block";

      }

      else {

        category.style.display = "none";

      }

    });

  });

});

searchInput.addEventListener("keyup", () => {

  const text = searchInput.value.toLowerCase();

  categories.forEach((category) => {

    const products = category.querySelectorAll(".menu-item");

    let found = false;

    products.forEach((product) => {

      const name = product.textContent.toLowerCase();

      if (name.includes(text)) {

        product.style.display = "flex";
        found = true;

      } else {

        product.style.display = "none";

      }

    });

    category.style.display = found ? "block" : "none";

  });

});