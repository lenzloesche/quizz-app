import {
  questionsNew,
  answersNew,
  questionsGermanNew,
  answersGermanNew,
  tagsNew,
  bookmarkedNew,
  isAnswerShownNew,
} from "./Utils/startingCardContent.js";
import { changeLanguageTo } from "./Components/Language/language.js";
import { createCard } from "./Components/Card/createCard.js";
import { changeTheme } from "./Components/Theme/theme.js";
import { bookmarkClick } from "./Components/Card/bookmarks.js";
import { setLanguage } from "./Components/Language/language.js";
import {
  createAnswerButton,
  changeHideAndShowAnswer,
} from "./Components/Card/cards.js";

export let questions = questionsNew;
export let answers = answersNew;
export let questionsGerman = questionsGermanNew;
export let answersGerman = answersGermanNew;
let tags = tagsNew;
let bookmarked = bookmarkedNew;
const isAnswerShown = isAnswerShownNew;

if (sessionStorage.getItem("bookmarked") != null) {
  bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
}
getSaved();
function getSaved() {
  if (sessionStorage.getItem("questions") != null) {
    questions = JSON.parse(sessionStorage.getItem("questions"));
    questionsGerman = JSON.parse(sessionStorage.getItem("questionsGerman"));
    answers = JSON.parse(sessionStorage.getItem("answers"));
    answersGerman = JSON.parse(sessionStorage.getItem("answersGerman"));
    tags = JSON.parse(sessionStorage.getItem("tags"));
  }
}

for (const bookmark of bookmarked) {
  isAnswerShown.push(true);
}

let numberOfCards = questions.length;

for (let cardNumber = 0; cardNumber < numberOfCards; cardNumber++) {
  createCard(cardNumber, bookmarked, tags);
}

const webElements = {
  body: document.querySelector('[data-js="body"]'),
  bookmarks: document.querySelectorAll('[data-js="bookmark"]'),
  answer: document.querySelectorAll('[data-js="answer"]'),
  card: document.querySelectorAll('[data-js="card"]'),
  show_answer: document.querySelectorAll('[data-js="show_answer"]'),
  navItemSelected: document.querySelector('[data-js="nav__item-selected"]'),
  tag: document.querySelectorAll('[data-js="tag"]'),
  header: document.querySelector('[data-js="header"]'),
  footer: document.querySelector('[data-js="footer"]'),
  questionsQuery: document.querySelectorAll('[data-js="question"]'),
};

let darkmodeOn = sessionStorage.getItem("darkModeOn");

export let currentLanguage = sessionStorage.getItem("currentLanguage");
currentLanguage = setLanguage(currentLanguage);

for (let i = 0; i < numberOfCards; i++) {
  changeHideAndShowAnswer(i, webElements, isAnswerShown);
}

if (document.URL.includes("bookmarks.html")) {
  for (let i = 0; i < numberOfCards; i++) {
    webElements.bookmarks[i].classList.add("card__bookmark-big");
  }
}

changeLanguageTo(
  webElements.questionsQuery,
  currentLanguage,
  questionsGerman,
  questions
);

for (let i = 0; i < numberOfCards; i++) {
  createAnswerButton(i, webElements, isAnswerShown);
}

if (darkmodeOn == "1") {
  changeTheme(webElements);
}
bookmarkClick(webElements, bookmarked);
