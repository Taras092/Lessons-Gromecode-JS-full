const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");
const userNameElem = document.querySelector("#name");

const errorElem = document.querySelector(".error-text");
const registerBtn = document.querySelector(".submit-button");
const formElement = document.querySelector(".login-form");

const baseUrl = "https://61b8921e64e4a10017d19082.mockapi.io/api/v1/form";

const isValid = () => {
  if (
    emailInputElem.reportValidity() &&
    passwordInputElem.reportValidity() &&
    userNameElem.reportValidity()
  ) {
    registerBtn.disable = false;
  }
  errorElem.textContent = "";
};

const sendForm = (formData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElement)]
  .reduce((acc, [field, value]) => ({ ...acc, [field]: value}), {});
  console.log(formData);
  sendForm(formData)
    .then((response) => response.json())
    .then((userData) => {
      alert(JSON.stringify(userData));
      formElement.reset();
      registerBtn.disabled = true;
    })
};

formElement.addEventListener("submit", onFormSubmit);
formElement.addEventListener("input", isValid);
