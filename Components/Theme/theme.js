export function changeTheme() {
  const webElements = {
    body: document.querySelector('[data-js="body"]'),
    answer: document.querySelectorAll('[data-js="answer"]'),
    card: document.querySelectorAll('[data-js="card"]'),
    show_answer: document.querySelectorAll('[data-js="show_answer"]'),
    navItemSelected: document.querySelector('[data-js="nav__item-selected"]'),
    tag: document.querySelectorAll('[data-js="tag"]'),
    header: document.querySelector('[data-js="header"]'),
    footer: document.querySelector('[data-js="footer"]'),
  };

  webElements.body.classList.toggle("body--dark-mode");
  webElements.navItemSelected.classList.toggle("nav--dark-mode");

  webElements.card.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  webElements.show_answer.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  webElements.tag.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  webElements.answer.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });

  webElements.header.classList.toggle("card--dark-mode");
  webElements.footer.classList.toggle("card--dark-mode");
}

export function darkModeTransition(webElements) {
  webElements.body.classList.add("dark-mode__transition");
  webElements.card.classList.add("dark-mode__transition");
  webElements.header.classList.add("dark-mode__transition");
  webElements.footer.classList.add("dark-mode__transition");
  webElements.navItemSelected.classList.add("dark-mode__transition");
  webElements.counter1.classList.add("dark-mode__transition");
  webElements.counter2.classList.add("dark-mode__transition");
  webElements.englishButton.classList.add("dark-mode__transition");
  webElements.germanButton.classList.add("dark-mode__transition");
}

export function changeThemeProfile(webElements) {
  webElements.body.classList.toggle("body--dark-mode");
  webElements.card.classList.toggle("card--dark-mode");
  webElements.header.classList.toggle("card--dark-mode");
  webElements.footer.classList.toggle("card--dark-mode");
  webElements.navItemSelected.classList.toggle("nav--dark-mode");
  webElements.counter1.classList.toggle("card--dark-mode");
  webElements.counter2.classList.toggle("card--dark-mode");
  webElements.englishButton.classList.toggle("card--dark-mode");
  webElements.germanButton.classList.toggle("card--dark-mode");
}
export function addDarkModeSwitch(webElements, darkmodeOn) {
  const switch_on = "./../../images/switch_on.gif";
  const switch_off = "./../../images/switch_off.svg";
  webElements.darkModeSwitch.addEventListener("click", () => {
    if (darkmodeOn == "0" || !darkmodeOn) {
      webElements.darkModeSwitch.src = switch_on;
      sessionStorage.setItem("darkModeOn", "1");
      darkmodeOn = "1";
    } else {
      webElements.darkModeSwitch.src = switch_off;
      sessionStorage.setItem("darkModeOn", "0");
      darkmodeOn = "0";
    }
    darkModeTransition(webElements);
    changeThemeProfile(webElements);
  });
}

export function changeFormTheme(webElements) {
  webElements.body.classList.toggle("body--dark-mode");
  const navItemSelected = document.querySelector(
    '[data-js="nav__item-selected"]'
  );
  const header = document.querySelector('[data-js="header"]');
  const footer = document.querySelector('[data-js="footer"]');
  navItemSelected.classList.toggle("nav--dark-mode");
  webElements.form.classList.toggle("card--dark-mode");
  webElements.inputQuestion.classList.toggle("card--dark-mode");
  webElements.inputAnswer.classList.toggle("card--dark-mode");
  webElements.inputTag1.classList.toggle("card--dark-mode");
  webElements.inputTag2.classList.toggle("card--dark-mode");
  webElements.inputTag3.classList.toggle("card--dark-mode");
  webElements.button = document.querySelector('[data-js="button"]');
  webElements.button.classList.toggle("card--dark-mode");
  webElements.buttomRandom.classList.toggle("card--dark-mode");
  webElements.randomOutput.classList.toggle("card--dark-mode");
  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
