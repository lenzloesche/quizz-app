import { currentLanguage, answers, answersGerman } from "./index.js";

export function createAnswerButton(i, webElements, isAnswerShown) {
  webElements.show_answer[i].addEventListener("click", () => {
    changeHideAndShowAnswer(i, webElements, isAnswerShown);
  });
}

export function changeHideAndShowAnswer(position, webElements, isAnswerShown) {
  if (isAnswerShown[position] === true) {
    webElements.answer[position].innerText = "...";
    webElements.show_answer[position].children[0].textContent =
      showTextShowAnswer();
    isAnswerShown[position] = false;
  } else {
    webElements.answer[position].innerText = showAnswer(position);
    webElements.show_answer[position].children[0].textContent =
      hideTextShowAnswer();
    isAnswerShown[position] = true;
  }
}

function showTextShowAnswer() {
  if (currentLanguage === "english") {
    return "Show answer.";
  }
  return "Zeige Antwort.";
}
function hideTextShowAnswer() {
  if (currentLanguage === "english") {
    return "Hide answer.";
  }
  return "Verberge Antwort.";
}

function showAnswer(position) {
  if (currentLanguage === "english") {
    return answers[position];
  }
  return answersGerman[position];
}
