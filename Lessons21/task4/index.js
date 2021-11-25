export function getTitle() {
  const elemTitle = document.querySelector(".title");
  return elemTitle.textContent;
}

export function getDescription() {
  const elemAbout = document.querySelector(".about");
  return elemAbout.innerText;
}

export function getPlans() {
  const elemPlans = document.querySelector(".plans");
  return elemPlans.innerHTML;
}

export function getGoal() {
  const elemGoal = document.querySelector(".goal");
  return elemGoal.outerHTML;
}

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
