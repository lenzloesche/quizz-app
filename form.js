const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const inputQuestion = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');
const inputTag1 = document.querySelector('[data-js="tag1"]');
const inputTag2 = document.querySelector('[data-js="tag2"]');
const inputTag3 = document.querySelector('[data-js="tag3"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);
  console.log(dataObject);

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

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tags");
  section.append(tagList);

  if (inputTag1.value) {
    const tag1 = document.createElement("li");
    tag1.classList.add("card__tag", "shadow");
    tag1.textContent = "#" + inputTag1.value;
    tagList.append(tag1);
  }

  if (inputTag2.value) {
    const tag2 = document.createElement("li");
    tag2.classList.add("card__tag", "shadow");
    tag2.textContent = "#" + inputTag2.value;
    tagList.append(tag2);
  }

  if (inputTag3.value) {
    const tag3 = document.createElement("li");
    tag3.classList.add("card__tag", "shadow");
    tag3.textContent = "#" + inputTag3.value;
    tagList.append(tag3);
  }
});

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
