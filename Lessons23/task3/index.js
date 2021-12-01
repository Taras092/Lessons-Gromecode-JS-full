// algo
// 1. when i click on checkbox , return done or not done
// 2. create new render
// 3. when I click on button 'Create',
// render has to refresh and add text from input in render
// 4. if (input is having text then add in render),
// when input isn't have text then input isn't add text in render
// 5. after that clear input
// 6. sort render

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map((item) => {
      const { text, done } = item;
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      checkbox.addEventListener("change", () => {
        renderTasks(
          tasksList.map((el) => {
            if (el === item) {
              return { ...item, done: checkbox.checked };
            }
            return el;
          })
        );
      });
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.innerHTML = "";
  listElem.append(...tasksElems);
};

const buttonElem = document.querySelector(".create-task-btn");

const addNewTask = () => {
  const inputElem = document.querySelector(".task-input");
  const str = inputElem.value;
  if (str === "") {
    return;
  }
  inputElem.value = "";
  renderTasks([{ text: str, done: false }, ...tasks]);
  // tasks.unshift({ text: str, done: false });
  // renderTasks(tasks);
};

buttonElem.addEventListener("click", addNewTask);

renderTasks(tasks);
