

export function finishList() {
  const listElement = document.querySelector('li');
  listElement.classList.add("list__item");
  const listElem1 = document.createElement('li');
  listElem1.textContent = '1';
  listElement.before(listElem1)

  const listElemMiddle = document.querySelector('.special');
  const listElem4 = document.createElement('li');
  listElem4.textContent = '4';
  listElemMiddle.before(listElem4);
  const elemList6 = document.createElement('li');
  elemList6.textContent = '6';
  listElemMiddle.after(elemList6);

  const elemListUl = document.querySelector('.list');
  const elemListEnd = document.createElement('li');
  elemListEnd.textContent = '8';
  elemListUl.append(elemListEnd);

}

