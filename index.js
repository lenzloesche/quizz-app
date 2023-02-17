import {
  questionsNew,
  answersNew,
  questionsGermanNew,
  answersGermanNew,
  tagsNew,
  bookmarkedNew,
  isAnswerShownNew,
} from "./startingCardContent.js";
import { changeLanguageTo } from "./language.js";
import { createCard } from "./createCard.js";
import { changeTheme } from "./theme.js";
import { bookmarkClick } from "./bookmarks.js";
import { setLanguage } from "./language.js";
import { createAnswerButton, changeHideAndShowAnswer } from "./cards.js";

let questions = questionsNew;
let answers = answersNew;
let questionsGerman = questionsGermanNew;
let answersGerman = answersGermanNew;
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

export let answerOutput = answers;
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
const {
  body,
  bookmarks,
  answer,
  card,
  show_answer,
  navItemSelected,
  tag,
  header,
  footer,
  questionsQuery,
} = webElements;

let darkmodeOn = sessionStorage.getItem("darkModeOn");

let questionsOutput = [];

export let currentLanguage = sessionStorage.getItem("currentLanguage");
currentLanguage = setLanguage(currentLanguage);

for (let i = 0; i < numberOfCards; i++) {
  changeHideAndShowAnswer(i, webElements, isAnswerShown);
}

if (currentLanguage === "english") {
  answerOutput = answers;
  questionsOutput = questions;
} else if (currentLanguage === "german") {
  answerOutput = answersGerman;
  questionsOutput = questionsGerman;
}
if (document.URL.includes("bookmarks.html")) {
  for (let i = 0; i < numberOfCards; i++) {
    webElements.bookmarks[i].classList.add("card__bookmark-big");
  }
}

changeLanguageTo(currentLanguage, questionsQuery, questionsOutput);

for (let i = 0; i < numberOfCards; i++) {
  createAnswerButton(i, webElements, isAnswerShown);
}

if (darkmodeOn == "1") {
  changeTheme(webElements);
}
bookmarkClick(webElements, bookmarked);
