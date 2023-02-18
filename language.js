import { questionsGerman, questions, currentLanguage } from "./index.js";
//import { darkModeTextGerman, darkModeTextEnglish } from "./profile.js";

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

/* export function changeLanguageProfileTo(language, webElements) {
  if (language === "english") {
    webElements.darkModeText.innerText = darkModeTextEnglish;
    webElements.userName.innerText = "User Name";
    webElements.germanButton.style.border = "0";
    webElements.englishButton.style.border = "3px solid black";
  } else {
    webElements.userName.innerText = "Name";
    webElements.darkModeText.innerText = darkModeTextGerman;
    webElements.germanButton.style.border = "3px solid black";
    webElements.englishButton.style.border = "0";
  }
} */
