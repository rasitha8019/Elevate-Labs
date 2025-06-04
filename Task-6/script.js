const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty.";
    isValid = false;
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent =
      "Thanks for contacting us! We'll get back to you shortly.";
    form.reset();
  }
});
