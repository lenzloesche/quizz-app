const body = document.querySelector('[data-js="body"]');
const card = document.querySelectorAll('[data-js="card"]');
const show_answer = document.querySelectorAll('[data-js="show_answer"]');
const navItemSelected = document.querySelector(
  '[data-js="nav__item-selected"]'
);

const tag = document.querySelectorAll('[data-js="tag"]');
const header = document.querySelector('[data-js="header"]');
const footer = document.querySelector('[data-js="footer"]');

let darkmodeOn = sessionStorage.getItem("darkModeOn");

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  navItemSelected.classList.toggle("nav--dark-mode");

  card.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  show_answer.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });
  tag.forEach(function (element) {
    element.classList.toggle("card--dark-mode");
  });

  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
}
