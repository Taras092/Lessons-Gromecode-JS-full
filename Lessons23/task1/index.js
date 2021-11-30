const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");
const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");

const isRequired = (value) => (value ? undefined : "Required");

const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";
  
  const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
  }

  const validate = (fielName, value) => {
    const validators = validatorsByField[fielName];
    return validators
    .map(validator => validator(value))
    .filter(errorTextt => errorTextt)
    .join(', ');
  }

const onEmailChange = (event) => {
 const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
   passwordErrorElem.textContent = errorText;
 };

emailInputElem.addEventListener("input", onEmailChange);
// emailInputElem.addEventListener('change', onEmailChange);
// emailInputElem.addEventListener('keyup', onEmailChange);

passwordInputElem.addEventListener('input', onPasswordChange)

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)]
  .reduce((acc, [field, value]) => ({ ...acc, [field]: value}), {});

  alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);


// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));
