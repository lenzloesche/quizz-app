import { questionsGerman, questions, currentLanguage } from "./index.js";

export function changeLanguageTo(questionsQuery) {
  for (let i = 0; i < questionsQuery.length; i++) {
    questionsQuery[i].innerText = getQuestion(i);
  }
}
export function setLanguage(currentLanguage) {
  if (currentLanguage != undefined) {
    return currentLanguage;
  } else {
    sessionStorage.setItem("currentLanguage", "english");
    return "english";
  }
}

function getQuestion(i) {
  if (currentLanguage === "english") {
    return questions[i];
  }
  return questionsGerman[i];
}
