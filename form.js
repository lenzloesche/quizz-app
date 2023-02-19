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
  showQuestionAndAnswer,
  addCounters,
  makeDeleteButtonWork,
  refreshCounters,
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
  inputQuestionGerman: document.querySelector(
    '[data-js="question-german-input"]'
  ),
  inputAnswerGerman: document.querySelector('[data-js="answer-german-input"]'),
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
  language: "english",
};

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
  const cardContainer = document.querySelector('[data-js="cardContainer"]');
  cardContainer.prepend(card);
  showQuestionAndAnswer(cardSuite, cardSuite.questions.length - 1);
  makeDeleteButtonWork(cardSuite, cardSuite.questions.length - 1);

  if (darkmodeOn == "1") {
    formChangeThemeOfCards();
  }

  event.target.reset();
  refreshCounters(webElements);
});

function getSaved() {
  if (sessionStorage.getItem("questions") != null) {
    cardSuite.questions = JSON.parse(sessionStorage.getItem("questions"));
    cardSuite.questionsGerman = JSON.parse(
      sessionStorage.getItem("questionsGerman")
    );
    cardSuite.answers = JSON.parse(sessionStorage.getItem("answers"));
    cardSuite.answersGerman = JSON.parse(
      sessionStorage.getItem("answersGerman")
    );
    cardSuite.tags = JSON.parse(sessionStorage.getItem("tags"));
    cardSuite.bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
  }
  if (sessionStorage.getItem("bookmarked") != null) {
    cardSuite.bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
  }
}

function saveCard() {
  sessionStorage.setItem("questions", JSON.stringify(cardSuite.questions));
  sessionStorage.setItem(
    "questionsGerman",
    JSON.stringify(cardSuite.questionsGerman)
  );
  sessionStorage.setItem("answers", JSON.stringify(cardSuite.answers));
  sessionStorage.setItem(
    "answersGerman",
    JSON.stringify(cardSuite.answersGerman)
  );
  sessionStorage.setItem("tags", JSON.stringify(cardSuite.tags));
  sessionStorage.setItem("bookmarked", JSON.stringify(cardSuite.bookmarked));
}

addCounters(webElements);

let darkmodeOn = sessionStorage.getItem("darkModeOn");

if (darkmodeOn == "1") {
  changeFormTheme(webElements);
}

webElements.buttomRandom.addEventListener("click", () => {
  getQuestion(webElements);
});

getSaved();
const cardContainer = document.querySelector('[data-js="cardContainer"]');
for (let cardNumber = 0; cardNumber < cardSuite.answers.length; cardNumber++) {
  const card = createCard(cardNumber, cardSuite.bookmarked, cardSuite.tags);
  cardContainer.prepend(card);
  showQuestionAndAnswer(cardSuite, cardNumber);
  makeDeleteButtonWork(cardSuite, cardNumber);
}
if (darkmodeOn == "1") {
  formChangeThemeOfCards();
}
