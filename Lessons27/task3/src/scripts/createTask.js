import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const inputElem = document.querySelector(".task-input");
  const text = inputElem.value;
  if (text === "") {
    return;
  }

  inputElem.value = "";

  const tasksList = getItem('tasksList') || [];

  tasksList.push({
    text,
    done: false,
    id: Math.floor(Math.random() * 1000000).toString()
  });

  setItem('tasksList', tasksList);

  renderTasks();
}