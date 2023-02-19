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
import { magnifyBookmark } from "./Components/Card/bookmarks.js";

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
  const main = document.querySelector('[data-js="main"]');
  const card = createCard(cardNumber, bookmarked, tags);
  main.append(card);
}

let darkmodeOn = sessionStorage.getItem("darkModeOn");
let currentLanguage = sessionStorage.getItem("currentLanguage");
currentLanguage = setLanguage(currentLanguage);

for (let i = 0; i < numberOfCards; i++) {
  changeHideAndShowAnswer(
    i,
    isAnswerShown,
    answers,
    answersGerman,
    currentLanguage
  );
}

magnifyBookmark();

changeLanguageTo(currentLanguage, questionsGerman, questions);

for (let i = 0; i < numberOfCards; i++) {
  createAnswerButton(i, isAnswerShown, answers, answersGerman, currentLanguage);
}

if (darkmodeOn == "1") {
  changeTheme();
}
bookmarkClick(bookmarked);
