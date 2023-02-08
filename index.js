const answer = document.querySelectorAll('[data-js="answer"]');

const body = document.querySelector('[data-js="body"]');
const card = document.querySelectorAll('[data-js="card"]');
const show_answer = document.querySelectorAll('[data-js="show_answer"]');
const navItemSelected = document.querySelector(
  '[data-js="nav__item-selected"]'
);

const tag = document.querySelectorAll('[data-js="tag"]');
const header = document.querySelector('[data-js="header"]');
const footer = document.querySelector('[data-js="footer"]');

let darkmodeOn = sessionStorage.getItem("darkModeOn");

const numberOfCards = 4;
const questions = ["question 1?", "question 2?", "question 3?", "question 4?"];
const questionsBookmarks = [
  "question bookmarks 1?",
  "question bookmarks 2?",
  "question bookmarks 3?",
  "question bookmarks 4?",
];

const answersIndex = ["answer 1.", "answer 2.", "answer 3", "answer 4"];
const answersBookmarks = [
  "bookmark answer 1.",
  "bookmark answer 2",
  "bookmark answer 4",
  "bookmark answer 4",
];
let answerOutput = [];

const questionsGerman = ["Frage 1?", "Frage 2?", "Frage 3?", "Frage 4?"];
const questionsBookmarksGerman = [
  "Frage Bookmarks 1?",
  "Frage Bookmarks 2?",
  "Frage Bookmarks 3?",
  "Frage Bookmarks 4?",
];
const answersIndexGerman = [
  "Antwort 1.",
  "Antwort 2.",
  "Antwort 3.",
  "Antwort 4.",
];
const answersBookmarksGerman = [
  "Bookmarkantwort 1.",
  "Bookmarkantwort 2.",
  "Bookmarkantwort 3.",
  "Bookmarkantwort 4.",
];

let questionsOutput = [];

const questionsQuery = document.querySelectorAll('[data-js="question"]');
let currentLanguage = sessionStorage.getItem("currentLanguage");

function changeLanguageTo(language) {
  for (let i = 0; i < questionsQuery.length; i++) {
    questionsQuery[i].innerText = questionsOutput[i];
  }
}

if (currentLanguage != undefined) {
} else {
  currentLanguage = "english";
  sessionStorage.setItem("currentLanguage", "english");
}
for (let i = 0; i < numberOfCards; i++) {
  changeHideAndShowAnswer(i);
}

if (document.URL.includes("bookmarks.html")) {
  if (currentLanguage === "english") {
    answerOutput = answersBookmarks;
    questionsOutput = questionsBookmarks;
  } else if (currentLanguage === "german") {
    answerOutput = answersBookmarksGerman;
    questionsOutput = questionsBookmarksGerman;
  }
} else {
  if (currentLanguage === "english") {
    answerOutput = answersIndex;
    questionsOutput = questions;
  } else if (currentLanguage === "german") {
    answerOutput = answersIndexGerman;
    questionsOutput = questionsGerman;
  }
}
changeLanguageTo(currentLanguage);

for (let i = 0; i < numberOfCards; i++) {
  show_answer[i].addEventListener("click", () => {
    answer[i].innerText =
      answer[i].innerText === "..." ? answerOutput[i] : "...";
    changeHideAndShowAnswer(i);
  });
}

function changeHideAndShowAnswer(position) {
  if (currentLanguage === "english") {
    show_answer[position].children[0].innerHTML =
      show_answer[position].children[0].innerHTML === "Show answer."
        ? "Hide answer."
        : "Show answer.";
  } else if (currentLanguage === "german") {
    show_answer[position].children[0].innerHTML =
      show_answer[position].children[0].innerHTML === "Zeige Antwort."
        ? "Verberge Antwort."
        : "Zeige Antwort.";
  }
}

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  navItemSelected.classList.toggle("nav--dark-mode");

  card.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  show_answer.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  tag.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });

  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
}
