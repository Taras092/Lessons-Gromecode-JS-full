const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const clear = document.querySelector(".clear-btn");
const removeHandles = document.querySelector(".remove-handlers-btn");
const attachHandlers = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

const remove = () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);

  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);

  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
}

const add = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

clear.addEventListener("click", () => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML = "";
});

removeHandles.addEventListener("click", remove);

// attachHandlers.addEventListener('click', add);

document.addEventListener('DOMContentLoaded', () => {
  attachHandlers.addEventListener('click', add);
});

// divElem.addEventListener("click", () => {
//   console.log("div");
// });

// const handler = () => {
//   console.log('div1');
// }

// elem.addEventListener('click', handler);

// elem.removeEventListener('click', handler);
