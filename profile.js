import { darkModeTransition, changeThemeProfile } from "./theme.js";
//import { changeLanguageProfileTo } from "./language.js";

const webElements = {
  body: document.querySelector('[data-js="body"]'),
  card: document.querySelector('[data-js="card"]'),
  header: document.querySelector('[data-js="header"]'),
  footer: document.querySelector('[data-js="footer"]'),
  counter1: document.querySelector('[data-js="counter1"]'),
  counter2: document.querySelector('[data-js="counter2"]'),
  darkModeSwitch: document.querySelector('[data-js="dark-mode-switch"]'),
  darkModeText: document.querySelector('[data-js="darkModeText"]'),
  userName: document.querySelector('[data-js="userName"]'),
  englishButton: document.querySelector('[data-js="englishButton"]'),
  germanButton: document.querySelector('[data-js="germanButton"]'),
  questionString: document.querySelector('[data-js="questionString"]'),
  bookmarkString: document.querySelector('[data-js="bookmarkString"]'),
  navItemSelected: document.querySelector('[data-js="nav__item-selected"]'),
};

const {
  body,
  card,
  header,
  footer,
  counter1,
  counter2,
  darkModeSwitch,
  darkModeText,
  userName,
  englishButton,
  germanButton,
  questionString,
  bookmarkString,
  navItemSelected,
} = webElements;

let darkmodeOn = sessionStorage.getItem("darkModeOn");

let currentLanguage = sessionStorage.getItem("currentLanguage");
export const darkModeTextEnglish = "Dark Mode";
export const darkModeTextGerman = "Dunkler Modus";

let bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
let questions = JSON.parse(sessionStorage.getItem("questions"));

if (questions != null) {
  questionString.textContent = "x" + questions.length;
}

if (bookmarked != null) {
  let counter = 0;
  for (const item of bookmarked) {
    if (item === true) {
      counter++;
    }
  }

  bookmarkString.textContent = "x" + counter;
}
console.log(englishButton);
englishButton.addEventListener("click", () => {
  currentLanguage = "english";
  sessionStorage.setItem("currentLanguage", "english");
  changeLanguageProfileTo(currentLanguage, webElements);
});

germanButton.addEventListener("click", () => {
  currentLanguage = "german";
  sessionStorage.setItem("currentLanguage", "german");
  changeLanguageProfileTo(currentLanguage, webElements);
});
function changeLanguageProfileTo(language, webElements) {
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
}

if (currentLanguage != undefined) {
  changeLanguageProfileTo(currentLanguage, webElements);
} else {
  currentLanguage = "english";
  sessionStorage.setItem("currentLanguage", "english");
  changeLanguageProfileTo("english", webElements);
}

darkModeSwitch.addEventListener("click", () => {
  if (darkmodeOn == "0" || !darkmodeOn) {
    darkModeSwitch.src = "/images/switch_on.gif";
    sessionStorage.setItem("darkModeOn", "1");
    darkmodeOn = "1";
  } else {
    darkModeSwitch.src = "/images/switch_off.svg";
    sessionStorage.setItem("darkModeOn", "0");
    darkmodeOn = "0";
  }
  darkModeTransition(webElements);
  changeThemeProfile(webElements);
});

if (darkmodeOn == "1") {
  changeThemeProfile(webElements);
  darkModeSwitch.src = "/images/switch_on.gif";
}
