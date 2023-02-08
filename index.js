const questions = [
  "question 1?",
  "question 2?",
  "question 3?",
  "question 4?",
  "question 5?",
];
const questionsBookmarks = [
  "question bookmarks 1?",
  "question bookmarks 2?",
  "question bookmarks 3?",
  "question bookmarks 4?",
  "question bookmarks 5?",
];

const answersIndex = [
  "answer 1.",
  "answer 2.",
  "answer 3",
  "answer 4",
  "answer 5",
];
const answersBookmarks = [
  "bookmark answer 1.",
  "bookmark answer 2",
  "bookmark answer 3",
  "bookmark answer 4",
  "bookmark answer 5.",
];
let answerOutput = [];

const questionsGerman = [
  "Frage 1?",
  "Frage 2?",
  "Frage 3?",
  "Frage 4?",
  "Frage 5?",
];
const questionsBookmarksGerman = [
  "Frage Bookmarks 1?",
  "Frage Bookmarks 2?",
  "Frage Bookmarks 3?",
  "Frage Bookmarks 4?",
  "Frage Bookmarks 5?",
];
const answersIndexGerman = [
  "Antwort 1.",
  "Antwort 2.",
  "Antwort 3.",
  "Antwort 4.",
  "Antwort 5.",
];
const answersBookmarksGerman = [
  "Bookmarkantwort 1.",
  "Bookmarkantwort 2.",
  "Bookmarkantwort 3.",
  "Bookmarkantwort 4.",
  "Bookmarkantwort 5.",
];

const tags = [
  ["html", "css", "flexbox", "4", "five"],
  ["html"],
  ["html", "flexbox"],
  ["html", "css", "flexbox"],
  ["html", "css"],
];

const numberOfCards = 5;

//generate cards
let bookmarksImage = "images/bookmark_white.svg";
if (document.URL.includes("bookmarks.html")) {
  bookmarksImage = "images/bookmark_black.svg";
}

for (let i = 0; i < numberOfCards; i++) {
  const section = document.createElement("section");
  const main = document.querySelector('[data-js="main"]');
  main.append(section);

  section.classList.add("card");
  section.setAttribute("data-js", "card");
  section.innerHTML = `
          <img
            src="${bookmarksImage}"
            alt="bookmark icon"
            class="card__bookmark"
          />
  
          <p class="card__question card__bigtext" data-js="question" >
            .
          </p>
  
          <button data-js="show_answer" class="card__showanswer shadow">
            <p class="card__bigtext">Show answer.</p>
          </button>
          <p class="card__answer card__bigtext" data-js="answer">...</p>
  
          <ul class="card__tags">
            
          </ul>`;

  let innerHTML = "";
  for (let j = 0; j < tags[i].length; j++) {
    innerHTML += `<li data-js="tag" class="card__tag shadow"><p>#${tags[i][j]}</p></li>`;
    section.children[4].innerHTML = innerHTML;
  }
}

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
