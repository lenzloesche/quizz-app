const questions = [
  "question 1?",
  "question 2?",
  "question 3?",
  "question 4?",
  "question 5?",
];

const answersIndex = [
  "answer 1.",
  "answer 2.",
  "answer 3",
  "answer 4",
  "answer 5",
];

let answerOutput = answersIndex;

const questionsGerman = [
  "Frage 1?",
  "Frage 2?",
  "Frage 3?",
  "Frage 4?",
  "Frage 5?",
];

const answersIndexGerman = [
  "Antwort 1.",
  "Antwort 2.",
  "Antwort 3.",
  "Antwort 4.",
  "Antwort 5.",
];

const tags = [
  ["tag1", "tag2", "tag3"],
  ["tag1"],
  ["tag1", "tag2"],
  ["tag1", "tag2", "tag3"],
  ["tag1", "tag2"],
];

let bookmarked = [false, false, false, false, false];

if (sessionStorage.getItem("bookmarked") != null) {
  bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
}

const isAnswerShown = [true, true, true, true, true];
let currentTags = tags;
let numberOfCards = questions.length;

let bookmarksImage = [
  "images/bookmark_white.svg",
  "images/bookmark_white.svg",
  "images/bookmark_white.svg",
  "images/bookmark_white.svg",
  "images/bookmark_white.svg",
];

for (let i = 0; i < numberOfCards; i++) {
  if (bookmarked[i] === true) {
    bookmarksImage[i] = "images/bookmark_black.svg";
  }

  const section = document.createElement("section");
  const main = document.querySelector('[data-js="main"]');
  main.append(section);
  if (document.URL.includes("bookmarks.html") && bookmarked[i] === false) {
    section.classList.add("display-none");
  }
  section.classList.add("card");
  section.setAttribute("data-js", "card");
  section.innerHTML = `
          <img
            src="${bookmarksImage[i]}"
            alt="bookmark icon"
            class="card__bookmark"
            data-js="bookmark"
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
  for (let j = 0; j < currentTags[i].length; j++) {
    innerHTML += `<li data-js="tag" class="card__tag shadow"><p>#${currentTags[i][j]}</p></li>`;
    section.children[4].innerHTML = innerHTML;
  }
}
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
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

if (currentLanguage === "english") {
  answerOutput = answersIndex;
  questionsOutput = questions;
} else if (currentLanguage === "german") {
  answerOutput = answersIndexGerman;
  questionsOutput = questionsGerman;
}
if (document.URL.includes("bookmarks.html")) {
  for (let i = 0; i < numberOfCards; i++) {
    bookmarks[i].classList.add("card__bookmark-big");
  }
}

changeLanguageTo(currentLanguage);

for (let i = 0; i < numberOfCards; i++) {
  show_answer[i].addEventListener("click", () => {
    changeHideAndShowAnswer(i);
  });
}

function changeHideAndShowAnswer(position) {
  if (currentLanguage === "english") {
    if (isAnswerShown[position] === true) {
      answer[position].innerText = "...";
      answer[position].classList.remove("card__answer--animation");

      show_answer[position].children[0].textContent = "Show answer.";
      isAnswerShown[position] = false;
    } else {
      answer[position].innerText = answerOutput[position];
      answer[position].classList.add("card__answer--animation");

      show_answer[position].children[0].textContent = "Hide answer.";
      isAnswerShown[position] = true;
    }
  } else if (currentLanguage === "german") {
    if (isAnswerShown[position] === true) {
      answer[position].innerText = "...";
      answer[position].classList.remove("card__answer--animation");
      show_answer[position].children[0].textContent = "Zeige Antwort.";
      isAnswerShown[position] = false;
    } else {
      answer[position].innerText = answerOutput[position];
      answer[position].classList.add("card__answer--animation");
      show_answer[position].children[0].textContent = "Verberge Antwort.";
      isAnswerShown[position] = true;
    }
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
  answer.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });

  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
}

for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener("click", () => {
    if (!card[i].classList.contains("card-dissapear")) {
      if (bookmarked[i] === true) {
        bookmarked[i] = false;
        bookmarks[i].src = "images/bookmark_white.svg";
        bookmarks[i].classList.remove("card__bookmark-big");
        if (document.URL.includes("bookmarks.html")) {
          card[i].classList.add("card-dissapear");
          let timeoutId = setTimeout(hideCard, 1000, i);
        }
      } else {
        bookmarked[i] = true;
        bookmarks[i].src = "images/bookmark_black.svg";
        bookmarks[i].classList.add("card__bookmark-big");
      }
      sessionStorage.setItem("bookmarked", JSON.stringify(bookmarked));
    }
  });
}

function hideCard(i) {
  card[i].classList.add("display-none");
}
