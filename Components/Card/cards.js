export function createAnswerButton(
  i,
  webElements,
  isAnswerShown,
  answers,
  answersGerman,
  currentLanguage
) {
  webElements.show_answer[i].addEventListener("click", () => {
    changeHideAndShowAnswer(
      i,
      webElements,
      isAnswerShown,
      answers,
      answersGerman,
      currentLanguage
    );
  });
}

export function changeHideAndShowAnswer(
  position,
  webElements,
  isAnswerShown,
  answers,
  answersGerman,
  currentLanguage
) {
  if (isAnswerShown[position] === true) {
    webElements.answer[position].innerText = "...";
    webElements.show_answer[position].children[0].textContent =
      showTextShowAnswer(currentLanguage);
    isAnswerShown[position] = false;
  } else {
    webElements.answer[position].innerText = showAnswer(
      position,
      currentLanguage,
      answers,
      answersGerman
    );
    webElements.show_answer[position].children[0].textContent =
      hideTextShowAnswer(currentLanguage);
    isAnswerShown[position] = true;
  }
}

function showTextShowAnswer(currentLanguage) {
  if (currentLanguage === "english") {
    return "Show answer.";
  }
  return "Zeige Antwort.";
}
function hideTextShowAnswer(currentLanguage) {
  if (currentLanguage === "english") {
    return "Hide answer.";
  }
  return "Verberge Antwort.";
}

function showAnswer(position, currentLanguage, answers, answersGerman) {
  if (currentLanguage === "english") {
    return answers[position];
  }
  return answersGerman[position];
}
