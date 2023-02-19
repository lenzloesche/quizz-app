export function createCard(cardNumber, bookmarked, tags) {
  const bookmark_black = "./../../images/bookmark_black.svg";
  const bookmark_white = "./../../images/bookmark_white.svg";
  let bookmarksImage;
  let bookmarksClass;
  if (bookmarked[cardNumber] === true) {
    bookmarksImage = bookmark_black;
    bookmarksClass = "card__bookmark card__bookmark-big";
  } else {
    bookmarksImage = bookmark_white;
    bookmarksClass = "card__bookmark";
  }

  const section = document.createElement("section");

  if (
    document.URL.includes("bookmarks.html") &&
    bookmarked[cardNumber] === false
  ) {
    section.classList.add("display-none");
  }
  section.classList.add("card");
  section.setAttribute("data-js", "card");
  section.innerHTML = `
          <img
            src="${bookmarksImage}"
            alt="bookmark icon"
            class="${bookmarksClass}"
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
  for (let j = 0; j < tags[cardNumber].length; j++) {
    if (tags[cardNumber][j] != "") {
      innerHTML += `<li data-js="tag" class="card__tag shadow"><p>#${tags[cardNumber][j]}</p></li>`;
    }
    section.children[4].innerHTML = innerHTML;
  }
  return section;
}

export function addNewCardToVariables(cardSuite, webElements) {
  cardSuite.questions.push(webElements.inputQuestion.value);
  cardSuite.answers.push(webElements.inputAnswer.value);

  if (webElements.inputQuestionGerman.value === "") {
    cardSuite.questionsGerman.push(webElements.inputQuestion.value);
  } else {
    cardSuite.questionsGerman.push(webElements.inputQuestionGerman.value);
  }
  if (webElements.inputAnswerGerman.value === "") {
    cardSuite.answersGerman.push(webElements.inputAnswer.value);
  } else {
    cardSuite.answersGerman.push(webElements.inputAnswerGerman.value);
  }

  cardSuite.tags.push([
    webElements.inputTag1.value,
    webElements.inputTag2.value,
    webElements.inputTag3.value,
  ]);
  cardSuite.bookmarked.push(false);
}

export function showQuestionAndAnswer(cardSuite, number) {
  const questionsQuery = document.querySelectorAll('[data-js="question"]');
  const answersQuery = document.querySelectorAll('[data-js="answer"]');
  const showAnswer = document.querySelectorAll('[data-js="show_answer"]');

  if (cardSuite.language === "english") {
    questionsQuery[0].innerText = cardSuite.questions[number];
    answersQuery[0].innerText = cardSuite.answers[number];
    showAnswer[0].children[0].innerText = "Delete";
  } else {
    questionsQuery[0].innerText = cardSuite.questionsGerman[number];
    answersQuery[0].innerText = cardSuite.answersGerman[number];
    showAnswer[0].children[0].innerText = "Löschen";
  }
}

function addCounter(input, outputName, length) {
  input.addEventListener("input", (event) => {
    refreshCounter(input, outputName, length);
  });
}

function refreshCounter(input, outputName, length) {
  const output = document.querySelector(`[data-js="${outputName}"]`);
  const lettersleft = length - Number(input.value.length);
  output.textContent = lettersleft + " characters left.";
}

export function refreshCounters(webElements) {
  refreshCounter(webElements.inputAnswer, "counterAnswer", 150);
  refreshCounter(webElements.inputQuestion, "counterQuestion", 150);
  refreshCounter(webElements.inputAnswerGerman, "counterAnswerGerman", 150);
  refreshCounter(webElements.inputQuestionGerman, "counterQuestionGerman", 150);
  refreshCounter(webElements.inputTag1, "counterTag1", 15);
  refreshCounter(webElements.inputTag2, "counterTag2", 15);
  refreshCounter(webElements.inputTag3, "counterTag3", 15);
}

export function addCounters(webElements) {
  addCounter(webElements.inputAnswer, "counterAnswer", 150);
  addCounter(webElements.inputQuestion, "counterQuestion", 150);
  addCounter(webElements.inputAnswerGerman, "counterAnswerGerman", 150);
  addCounter(webElements.inputQuestionGerman, "counterQuestionGerman", 150);
  addCounter(webElements.inputTag1, "counterTag1", 15);
  addCounter(webElements.inputTag2, "counterTag2", 15);
  addCounter(webElements.inputTag3, "counterTag3", 15);
}

export function makeDeleteButtonWork(cardSuite, position) {
  const button = document.querySelectorAll('[data-js="show_answer"]');
  button[0].classList.add("card__button--delete");
  const card = document.querySelectorAll('[data-js="card"]');
  button[0].addEventListener("click", () => {
    cardSuite.questions.splice(position, 1);
    cardSuite.answers.splice(position, 1);
    cardSuite.answersGerman.splice(position, 1);
    cardSuite.questionsGerman.splice(position, 1);
    cardSuite.tags.splice(position, 1);
    cardSuite.bookmarked.splice(position, 1);
    card[0].classList.add("display-none");
  });
}
