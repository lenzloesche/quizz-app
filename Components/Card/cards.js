export function createAnswerButton(
  i,
  isAnswerShown,
  answers,
  answersGerman,
  currentLanguage
) {
  const show_answer = document.querySelectorAll('[data-js="show_answer"]');

  show_answer[i].addEventListener("click", () => {
    changeHideAndShowAnswer(
      i,
      isAnswerShown,
      answers,
      answersGerman,
      currentLanguage
    );
  });
}

export function changeHideAndShowAnswer(
  position,
  isAnswerShown,
  answers,
  answersGerman,
  currentLanguage
) {
  const show_answer = document.querySelectorAll('[data-js="show_answer"]');
  const answer = document.querySelectorAll('[data-js="answer"]');

  if (isAnswerShown[position] === true) {
    answer[position].innerText = "...";
    show_answer[position].children[0].textContent =
      showTextShowAnswer(currentLanguage);
    isAnswerShown[position] = false;
  } else {
    answer[position].innerText = showAnswer(
      position,
      currentLanguage,
      answers,
      answersGerman
    );
    show_answer[position].children[0].textContent =
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
