export function changeLanguageTo(
  questionsQuery,
  currentLanguage,
  questionsGerman,
  questions
) {
  for (let i = 0; i < questionsQuery.length; i++) {
    questionsQuery[i].innerText = getQuestion(
      i,
      currentLanguage,
      questionsGerman,
      questions
    );
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

function getQuestion(i, currentLanguage, questionsGerman, questions) {
  if (currentLanguage === "english") {
    return questions[i];
  }
  return questionsGerman[i];
}

export function changeLanguageProfileTo(
  currentLanguage,
  webElements,
  darkModeTextEnglish,
  darkModeTextGerman
) {
  if (currentLanguage === "english") {
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
}

export function setLanguageProfilePage(
  currentLanguage,
  webElements,
  darkModeTextEnglish,
  darkModeTextGerman
) {
  if (currentLanguage != undefined) {
    changeLanguageProfileTo(
      currentLanguage,
      webElements,
      darkModeTextEnglish,
      darkModeTextGerman
    );
  } else {
    currentLanguage = "english";
    sessionStorage.setItem("currentLanguage", "english");
    changeLanguageProfileTo(
      "english",
      webElements,
      darkModeTextEnglish,
      darkModeTextGerman
    );
  }
}
