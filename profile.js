import {
  addDarkModeSwitch,
  changeThemeProfile,
} from "./Components/Theme/theme.js";
import {
  changeLanguageProfileTo,
  setLanguageProfilePage,
} from "./Components/Language/language.js";
import {
  writeBookmarkCounter,
  writeQuestionCounter,
} from "./Components/Profile/displayCounter.js";

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

let darkmodeOn = sessionStorage.getItem("darkModeOn");

let currentLanguage = sessionStorage.getItem("currentLanguage");
const darkModeTextEnglish = "Dark Mode";
const darkModeTextGerman = "Dunkler Modus";

let bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
let questions = JSON.parse(sessionStorage.getItem("questions"));

writeQuestionCounter(questions, webElements.questionString);
writeBookmarkCounter(bookmarked, webElements.bookmarkString);

webElements.englishButton.addEventListener("click", () => {
  currentLanguage = "english";
  sessionStorage.setItem("currentLanguage", "english");
  changeLanguageProfileTo(
    currentLanguage,
    webElements,
    darkModeTextEnglish,
    darkModeTextGerman
  );
});

webElements.germanButton.addEventListener("click", () => {
  currentLanguage = "german";
  sessionStorage.setItem("currentLanguage", "german");
  changeLanguageProfileTo(
    currentLanguage,
    webElements,
    darkModeTextEnglish,
    darkModeTextGerman
  );
});

changeLanguageProfileTo(
  currentLanguage,
  webElements,
  darkModeTextEnglish,
  darkModeTextGerman
);

setLanguageProfilePage(
  currentLanguage,
  webElements,
  darkModeTextEnglish,
  darkModeTextGerman
);

addDarkModeSwitch(webElements, darkmodeOn);

if (darkmodeOn == "1") {
  changeThemeProfile(webElements, darkModeTextEnglish, darkModeTextGerman);
  webElements.darkModeSwitch.src = "/images/switch_on.gif";
}
