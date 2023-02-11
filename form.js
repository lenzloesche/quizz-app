const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const body = document.querySelector('[data-js="body"]');
const inputQuestion = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');
const inputTag1 = document.querySelector('[data-js="tag1"]');
const inputTag2 = document.querySelector('[data-js="tag2"]');
const inputTag3 = document.querySelector('[data-js="tag3"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);

  const section = document.createElement("section");
  section.classList.add("card");
  main.append(section);

  const img = document.createElement("img");
  img.classList.add("card__bookmark");
  img.src = "images/bookmark_white.svg";
  section.append(img);

  const question = document.createElement("p");
  question.classList.add("card__question", "card__bigtext");
  question.textContent = inputQuestion.value;
  section.append(question);

  const showanswer = document.createElement("button");
  showanswer.classList.add("card__showanswer", "shadow");

  section.append(showanswer);

  const showanswerParagraph = document.createElement("p");
  showanswerParagraph.classList.add("card__bigtext");
  showanswerParagraph.textContent = "Hide Answer";
  showanswer.append(showanswerParagraph);

  const answer = document.createElement("p");
  answer.classList.add("card__answer", "card__bigtext");

  answer.textContent = inputAnswer.value;
  section.append(answer);

  let tagList = "";
  if (inputTag1.value || inputTag2.value || inputTag3.value) {
    tagList = document.createElement("ul");
    tagList.classList.add("card__tags");
    section.append(tagList);
  }
  if (inputTag1.value) {
    addTagToList(inputTag1, tagList);
  }

  if (inputTag2.value) {
    addTagToList(inputTag2, tagList);
  }

  if (inputTag3.value) {
    addTagToList(inputTag3, tagList);
  }

  if (darkmodeOn == "1") {
    answer.classList.toggle("card--dark-mode");
    showanswer.classList.toggle("card--dark-mode");
    section.classList.toggle("card--dark-mode");
  }

  event.target.reset();
});

function addTagToList(inputTag, tagList) {
  const tag = document.createElement("li");
  tag.classList.add("card__tag", "shadow");
  tag.textContent = "#" + inputTag.value;
  if (darkmodeOn == "1") {
    tag.classList.toggle("card--dark-mode");
  }
  tagList.append(tag);
}

const counterQuestion = document.querySelector('[data-js="question-counter"]');
const counterAnswer = document.querySelector('[data-js="answer-counter"]');

inputQuestion.addEventListener("input", (event) => {
  const lettersleft = 150 - Number(event.target.value.length);
  counterQuestion.textContent = lettersleft + " characters left.";
});
inputAnswer.addEventListener("input", (event) => {
  const lettersleft = 150 - Number(event.target.value.length);
  counterAnswer.textContent = lettersleft + " characters left.";
});

let darkmodeOn = sessionStorage.getItem("darkModeOn");

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  const navItemSelected = document.querySelector(
    '[data-js="nav__item-selected"]'
  );
  const header = document.querySelector('[data-js="header"]');
  const footer = document.querySelector('[data-js="footer"]');
  navItemSelected.classList.toggle("nav--dark-mode");
  form.classList.toggle("card--dark-mode");
  inputQuestion.classList.toggle("card--dark-mode");
  inputAnswer.classList.toggle("card--dark-mode");
  inputTag1.classList.toggle("card--dark-mode");
  inputTag2.classList.toggle("card--dark-mode");
  inputTag3.classList.toggle("card--dark-mode");
  button = document.querySelector('[data-js="button"]');
  button.classList.toggle("card--dark-mode");
  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
}
