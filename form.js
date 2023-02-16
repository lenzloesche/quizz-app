import { encode } from "html-entities";

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const body = document.querySelector('[data-js="body"]');
const inputQuestion = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');
const inputTag1 = document.querySelector('[data-js="tag1"]');
const inputTag2 = document.querySelector('[data-js="tag2"]');
const inputTag3 = document.querySelector('[data-js="tag3"]');
const buttomRandom = document.querySelector('[data-js="button_random"]');
const randomOutput = document.querySelector('[data-js="randomOutput"]');
let questions = [
  "question 1?",
  "question 2?",
  "question 3?",
  "question 4?",
  "question 5?",
];

let answers = ["answer 1.", "answer 2.", "answer 3", "answer 4", "answer 5"];

let questionsGerman = [
  "Frage 1?",
  "Frage 2?",
  "Frage 3?",
  "Frage 4?",
  "Frage 5?",
];

let answersGerman = [
  "Antwort 1.",
  "Antwort 2.",
  "Antwort 3.",
  "Antwort 4.",
  "Antwort 5.",
];

let tags = [
  ["tag1", "tag2", "tag3"],
  ["tag1"],
  ["tag1", "tag2"],
  ["tag1", "tag2", "tag3"],
  ["tag1", "tag2"],
];

let bookmarked = [false, false, false, false, false];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
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
  }

  getSaved();
  addNewCardToVariables();
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

function addNewCardToVariables() {
  questions.push(inputQuestion.value);
  answers.push(inputAnswer.value);
  questionsGerman.push(inputQuestion.value);
  answersGerman.push(inputAnswer.value);
  tags.push([inputTag1.value, inputTag2.value, inputTag3.value]);
  bookmarked.push(false);
}

function saveCard() {
  sessionStorage.setItem("questions", JSON.stringify(questions));
  sessionStorage.setItem("questionsGerman", JSON.stringify(questionsGerman));
  sessionStorage.setItem("answers", JSON.stringify(answers));
  sessionStorage.setItem("answersGerman", JSON.stringify(answersGerman));
  sessionStorage.setItem("tags", JSON.stringify(tags));
  sessionStorage.setItem("bookmarked", JSON.stringify(bookmarked));
}

function addTagToList(inputTag, tagList) {
  const tag = document.createElement("li");
  tag.classList.add("card__tag", "shadow");
  tag.textContent = "#" + inputTag.value;
  if (darkmodeOn == "1") {
    tag.classList.toggle("card--dark-mode");
  }
  tagList.append(tag);
}

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

let darkmodeOn = sessionStorage.getItem("darkModeOn");

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  const navItemSelected = document.querySelector(
    '[data-js="nav__item-selected"]'
  );
  const header = document.querySelector('[data-js="header"]');
  const footer = document.querySelector('[data-js="footer"]');
  navItemSelected.classList.toggle("nav--dark-mode");
  form.classList.toggle("card--dark-mode");
  inputQuestion.classList.toggle("card--dark-mode");
  inputAnswer.classList.toggle("card--dark-mode");
  inputTag1.classList.toggle("card--dark-mode");
  inputTag2.classList.toggle("card--dark-mode");
  inputTag3.classList.toggle("card--dark-mode");
  button = document.querySelector('[data-js="button"]');
  button.classList.toggle("card--dark-mode");
  buttomRandom.classList.toggle("card--dark-mode");
  randomOutput.classList.toggle("card--dark-mode");
  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
}

buttomRandom.addEventListener("click", () => {
  getQuestion();
});

async function getQuestion() {
  try {
    buttomRandom.disabled = true;
    buttomRandom.textContent = "...";
    randomOutput.textContent = "Fetching Random Card";
    const fetchJson = await fetch("https://opentdb.com/api.php?amount=1");
    if (fetchJson.ok) {
      const fetchJs = await fetchJson.json();

      const question = encode(fetchJs.results[0].question);
      const answer = encode(fetchJs.results[0].correct_answer);
      const tag = encode(fetchJs.results[0].category);

      inputQuestion.value = question;
      inputAnswer.value = answer;
      inputTag1.value = tag;

      randomOutput.textContent = "Fetching Successful";
    }
  } catch (error) {
    console.log("Fetching failed...");
    console.log(error);
    randomOutput.textContent = "Fetching failed";
  } finally {
    buttomRandom.disabled = false;
    buttomRandom.textContent = "Generate Random Card";
  }
}

/* function decodeHtml(htmlInput) {
  let stringOutput = new DOMParser().parseFromString(htmlInput, "text/html");
  return stringOutput.documentElement.textContent;
}
 */
