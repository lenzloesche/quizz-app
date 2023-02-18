export function changeTheme(webElements) {
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
