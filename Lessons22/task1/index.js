const divelem = document.querySelectorAll('.rect_div');
const pElem = document.querySelectorAll('.rect_p');
const spanElem = document.querySelectorAll('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelectorAll('.events-list');
  eventsListElem.innerHTML = `<span style="color:${color} margin-left: 8px">${text}</span>`
}


const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divelem.addEventListener('click', logGreyDiv, true);
divelem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreenP);






// elem.addEventListener('click', () => {
//   console.log('div');
// });

// const handler = () => {
//   console.log('div1');
// }

// elem.addEventListener('click', handler);

// elem.removeEventListener('click', handler);