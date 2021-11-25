export function finishFrom() {
  const form = document.querySelector('form');

  const inputPass = document.querySelector('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('type', 'password');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.name = 'login';
  form.prepend(input);
}

