import {
  questionsNew,
  answersNew,
  questionsGermanNew,
  answersGermanNew,
  tagsNew,
  bookmarkedNew,
} from "./Utils/startingCardContent.js";
import {
  addNewCardToVariables,
  createCard,
} from "./Components/Card/createCard.js";
import { getQuestion } from "./Components/Form/fetch.js";
import {
  changeFormTheme,
  formChangeThemeOfCards,
} from "./Components/Theme/theme.js";

const webElements = {
  form: document.querySelector('[data-js="form"]'),
  main: document.querySelector('[data-js="main"]'),
  body: document.querySelector('[data-js="body"]'),
  inputQuestion: document.querySelector('[data-js="question-input"]'),
  inputAnswer: document.querySelector('[data-js="answer-input"]'),
  inputTag1: document.querySelector('[data-js="tag1-input"]'),
  inputTag2: document.querySelector('[data-js="tag2-input"]'),
  inputTag3: document.querySelector('[data-js="tag3-input"]'),
  buttomRandom: document.querySelector('[data-js="button_random"]'),
  randomOutput: document.querySelector('[data-js="randomOutput"]'),
};

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

  getSaved();
  addNewCardToVariables(cardSuite, webElements);
  saveCard();
  const card = createCard(
    cardSuite.questions.length - 1,
    cardSuite.bookmarked,
    cardSuite.tags
  );
  const main = document.querySelector('[data-js="cardContainer"]');
  main.prepend(card);
  if (darkmodeOn == "1") {
    formChangeThemeOfCards();
  }

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
