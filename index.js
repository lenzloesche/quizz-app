const answer = document.querySelectorAll('[data-js="answer"]');

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

let numberOfCards = 4;

for (let i = 0; i < numberOfCards; i++) {
  show_answer[i].addEventListener("click", () => {
    answer[i].innerHTML = answer[i].innerHTML === "..." ? "632 Years." : "...";
    show_answer[i].children[0].innerHTML =
      show_answer[i].children[0].innerHTML === "Show answer"
        ? "Hide answer"
        : "Show answer";
  });
}

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
