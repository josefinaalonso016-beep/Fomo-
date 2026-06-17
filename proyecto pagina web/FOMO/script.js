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



