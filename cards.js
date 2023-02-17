import { currentLanguage, answerOutput } from "./index.js";

export function createAnswerButton(i, webElements, isAnswerShown) {
  webElements.show_answer[i].addEventListener("click", () => {
    changeHideAndShowAnswer(i, webElements, isAnswerShown);
  });
}
export function changeHideAndShowAnswer(position, webElements, isAnswerShown) {
  if (currentLanguage === "english") {
    if (isAnswerShown[position] === true) {
      webElements.answer[position].innerText = "...";

      webElements.show_answer[position].children[0].textContent =
        "Show answer.";
      isAnswerShown[position] = false;
    } else {
      webElements.answer[position].innerText = answerOutput[position];

      webElements.show_answer[position].children[0].textContent =
        "Hide answer.";
      isAnswerShown[position] = true;
    }
  } else if (currentLanguage === "german") {
    if (isAnswerShown[position] === true) {
      webElements.answer[position].innerText = "...";
      webElements.show_answer[position].children[0].textContent =
        "Zeige Antwort.";
      isAnswerShown[position] = false;
    } else {
      webElements.answer[position].innerText = answerOutput[position];
      webElements.show_answer[position].children[0].textContent =
        "Verberge Antwort.";
      isAnswerShown[position] = true;
    }
  }
}
