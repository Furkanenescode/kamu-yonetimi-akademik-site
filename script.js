document.getElementById("year").textContent = new Date().getFullYear();

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
