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
