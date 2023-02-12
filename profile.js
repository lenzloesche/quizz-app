const body = document.querySelector('[data-js="body"]');
const card = document.querySelector('[data-js="card"]');
const header = document.querySelector('[data-js="header"]');
const footer = document.querySelector('[data-js="footer"]');
const navItemSelected = document.querySelector(
  '[data-js="nav__item-selected"]'
);

const counter1 = document.querySelector('[data-js="counter1"]');
const counter2 = document.querySelector('[data-js="counter2"]');
const darkModeSwitch = document.querySelector('[data-js="dark-mode-switch"]');
let darkmodeOn = sessionStorage.getItem("darkModeOn");

const darkModeText = document.querySelector('[data-js="darkModeText"]');
const userName = document.querySelector('[data-js="userName"]');

const englishButton = document.querySelector('[data-js="englishButton"]');
const germanButton = document.querySelector('[data-js="germanButton"]');
let currentLanguage = sessionStorage.getItem("currentLanguage");
const darkModeTextEnglish = "Dark Mode";
const darkModeTextGerman = "Dunkler Modus";

bookmarked = JSON.parse(sessionStorage.getItem("bookmarked"));
questions = JSON.parse(sessionStorage.getItem("questions"));
const questionString = document.querySelector('[data-js="questionString"]');
const bookmarkString = document.querySelector('[data-js="bookmarkString"]');

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

englishButton.addEventListener("click", () => {
  currentLanguage = "english";
  sessionStorage.setItem("currentLanguage", "english");
  changeLanguageTo(currentLanguage);
});

germanButton.addEventListener("click", () => {
  currentLanguage = "german";
  sessionStorage.setItem("currentLanguage", "german");
  changeLanguageTo(currentLanguage);
});

function changeLanguageTo(language) {
  if (language === "english") {
    darkModeText.innerText = darkModeTextEnglish;
    userName.innerText = "User Name";
    germanButton.style.border = "0";
    englishButton.style.border = "3px solid black";
  } else if (language === "german") {
    userName.innerText = "Name";
    darkModeText.innerText = darkModeTextGerman;
    germanButton.style.border = "3px solid black";
    englishButton.style.border = "0";
  }
}

if (currentLanguage != undefined) {
  changeLanguageTo(currentLanguage);
} else {
  currentLanguage = "english";
  sessionStorage.setItem("currentLanguage", "english");
  changeLanguageTo("english");
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
  darkModeTransition();
  changeTheme();
});

function darkModeTransition() {
  body.classList.add("dark-mode__transition");
  card.classList.add("dark-mode__transition");
  header.classList.add("dark-mode__transition");
  footer.classList.add("dark-mode__transition");
  navItemSelected.classList.add("dark-mode__transition");
  counter1.classList.add("dark-mode__transition");
  counter2.classList.add("dark-mode__transition");
  englishButton.classList.add("dark-mode__transition");
  germanButton.classList.add("dark-mode__transition");
}

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  card.classList.toggle("card--dark-mode");
  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
  navItemSelected.classList.toggle("nav--dark-mode");
  counter1.classList.toggle("card--dark-mode");
  counter2.classList.toggle("card--dark-mode");
  englishButton.classList.toggle("card--dark-mode");
  germanButton.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
  darkModeSwitch.src = "/images/switch_on.gif";
}
