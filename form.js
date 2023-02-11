const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const inputQuestion = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');
const inputTag1 = document.querySelector('[data-js="tag1"]');
const inputTag2 = document.querySelector('[data-js="tag2"]');
const inputTag3 = document.querySelector('[data-js="tag3"]');

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
}

function addNewCardToVariables() {
  questions.push(inputQuestion.value);
  console.log(inputAnswer.value + " " + answers);
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
