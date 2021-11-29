const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('change', () => {
  if(checkboxElem.value === 'checked') {
    console.log(true);
  }
  console.log(false);
})