const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// // events
// // 1. add event to the element
// // 2. create event handlers

// // list
// // click

// // input: event
// // output: undef

// // algo
// // 1.find task by id
// // 2. update task
// // 3. re-render
function updateTaskHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const task = tasks.find((el) => el.id === Number(event.target.dataset.id));
  task.done = event.target.checked;
  task.done = !task.done;
  renderTasks(tasks);
}

// input: string, func
// output: undefiened
listElem.addEventListener('click', updateTaskHandler);


// algo
// 1. get task text
// 2. create task
// 3. update tasks
// 4. re-render

const onAddNewTask = () => {
  const inputElem = document.querySelector(".task-input");
  const str = inputElem.value;
  if (str === "") {
    return;
  }
  inputElem.value = "";
  // renderTasks([{ text: str, done: false }, ...tasks]);
  tasks.unshift({ text: str, done: false, id: tasks.length + 1 });
  renderTasks(tasks);
};
const buttonElem = document.querySelector(".create-task-btn");
buttonElem.addEventListener("click", onAddNewTask);


// WEB FLOW
// 1. get data
// 2. render
// 3. update data, don't update DOM
// 4. re-render


