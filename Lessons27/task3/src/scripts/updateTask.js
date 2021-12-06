import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";

// export const onToggleTask = (event) => {
//   const isCheckbox = event.target.classList.contains(".list__item-checkbox");

//   if (!isCheckbox) {
//     return;
//   }
//   const tasksList = getItem("tasksList");
//   const newTasksList = tasksList.map((task) => {
//     if (task.id === event.target.dataset.id) {
//       const done = event.target.checked;
//       return {
//         ...task,
//         done,
//         // finishDate: done ? new Date().toISOString() : null,
//       };
//     }
//     return task;
//   });
//   setItem('tasksList', newTasksList);
//   renderTasks();
// };

export const onToggleTask = ({ target }) => {
  if (target.tagName === "LI") {
    target = target.querySelector(`input[type="checkbox"]`);
    target.checked = !target.checked;
  }
  const id = target.dataset.id;
  const tasksList = getItem("tasksList");
  const newTasksList = tasksList.find((el) => el.id === id);
  newTasksList.done = target.checked;
  setItem("tasksList", tasksList);
  renderTasks();
};
