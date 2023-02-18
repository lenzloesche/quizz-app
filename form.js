import {
  questionsNew,
  answersNew,
  questionsGermanNew,
  answersGermanNew,
  tagsNew,
  bookmarkedNew,
  isAnswerShownNew,
} from "./Utils/startingCardContent.js";
import {
  addNewCardToVariables,
  initSubmitButton,
} from "./Components/Card/createCard.js";
import { getQuestion } from "./Components/Form/fetch.js";
import { changeFormTheme } from "./Components/Theme/theme.js";

const webElements = {
  form: document.querySelector('[data-js="form"]'),
  main: document.querySelector('[data-js="main"]'),
  body: document.querySelector('[data-js="body"]'),
  inputQuestion: document.querySelector('[data-js="question"]'),
  inputAnswer: document.querySelector('[data-js="answer"]'),
  inputTag1: document.querySelector('[data-js="tag1"]'),
  inputTag2: document.querySelector('[data-js="tag2"]'),
  inputTag3: document.querySelector('[data-js="tag3"]'),
  buttomRandom: document.querySelector('[data-js="button_random"]'),
  randomOutput: document.querySelector('[data-js="randomOutput"]'),
};
/* 
let {
  form,
  main,
  body,
  inputQuestion,
  inputAnswer,
  inputTag1,
  inputTag2,
  inputTag3,
  buttomRandom,
  randomOutput,
} = webElements; */

const cardSuite = {
  questions: questionsNew,
  answers: answersNew,
  questionsGerman: questionsGermanNew,
  answersGerman: answersGermanNew,
  tags: tagsNew,
  bookmarked: bookmarkedNew,
};
let { questions, answers, questionsGerman, answersGerman, tags, bookmarked } =
  cardSuite;

webElements.form.addEventListener("submit", (event) => {
  event.preventDefault();

  /* const formData = new FormData(event.target);
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
  } */

  getSaved();
  addNewCardToVariables(cardSuite, webElements);
  saveCard();
  event.target.reset();
});

function getSaved() {
  if (sessionStorage.getItem("questions") != null) {
    questions = JSON.parse(sessionStorage.getItem("questions"));
    questionsGerman = JSON.parse(sessionStorage.getItem("questionsGerman"));
    answers = JSON.parse(sessionStorage.getItem("answers"));
    answersGerman = JSON.parse(sessionStorage.getItem("answersGerman"));
    tags = JSON.parse(sessionStorage.getItem("tags"));
    bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
  }
  if (sessionStorage.getItem("bookmarked") != null) {
    bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
  }
}
//addNewCardToVariables(cardSuite, webElements);

function saveCard() {
  sessionStorage.setItem("questions", JSON.stringify(questions));
  sessionStorage.setItem("questionsGerman", JSON.stringify(questionsGerman));
  sessionStorage.setItem("answers", JSON.stringify(answers));
  sessionStorage.setItem("answersGerman", JSON.stringify(answersGerman));
  sessionStorage.setItem("tags", JSON.stringify(tags));
  sessionStorage.setItem("bookmarked", JSON.stringify(bookmarked));
}

/* function addTagToList(inputTag, tagList) {
  const tag = document.createElement("li");
  tag.classList.add("card__tag", "shadow");
  tag.textContent = "#" + inputTag.value;
  if (darkmodeOn == "1") {
    tag.classList.toggle("card--dark-mode");
  }
  tagList.append(tag);
} */

const counterQuestion = document.querySelector('[data-js="question-counter"]');
const counterAnswer = document.querySelector('[data-js="answer-counter"]');

webElements.inputQuestion.addEventListener("input", (event) => {
  const lettersleft = 150 - Number(event.target.value.length);
  counterQuestion.textContent = lettersleft + " characters left.";
});
webElements.inputAnswer.addEventListener("input", (event) => {
  const lettersleft = 150 - Number(event.target.value.length);
  counterAnswer.textContent = lettersleft + " characters left.";
});

let darkmodeOn = sessionStorage.getItem("darkModeOn");

if (darkmodeOn == "1") {
  changeFormTheme(webElements);
}

webElements.buttomRandom.addEventListener("click", () => {
  getQuestion(webElements);
});
