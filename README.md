document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
  });
}

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const submitButton = form.querySelector("button");
    const originalText = submitButton.textContent;

    submitButton.textContent = "Mesaj Gönderildi";
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      form.reset();
    }, 1800);
  });
}
