const email = document.getElementById("email");
const errorMessage = document.getElementById("comming-soon__form-error");
const form = document.getElementById("emailForm");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  if (!regex.test(email.value)) {
    e.preventDefault();
    errorMessage.hidden = false;
    email.focus();
  } else {
    errorMessage.hidden = true;
  }
});
