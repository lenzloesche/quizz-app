export function changeLanguageTo(language, questionsQuery, questionsOutput) {
  for (let i = 0; i < questionsQuery.length; i++) {
    questionsQuery[i].innerText = questionsOutput[i];
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
