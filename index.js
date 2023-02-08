//genertae cards

const section = document.createElement("section");
const main = document.querySelector('[data-js="main"]');
main.append(section);

section.classList.add("card");
section.setAttribute("data-js", "card");
section.innerHTML = `
        <img
          src="images/bookmark_white.svg"
          alt="bookmark icon"
          class="card__bookmark"
        />

        <p class="card__question card__bigtext">
          Computer generated?
        </p>

        <button data-js="show_answer" class="card__showanswer shadow">
          <p class="card__bigtext">Show answer.</p>
        </button>
        <p class="card__answer card__bigtext" data-js="answer">...</p>

        <ul class="card__tags">
          <li data-js="tag" class="card__tag shadow"><p>#html</p></li>
          <li data-js="tag" class="card__tag shadow"><p>#css</p></li>
          <li data-js="tag" class="card__tag shadow"><p>#flexbox</p></li>
        </ul>`;

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

const numberOfCards = 5;
const answersIndex = [
  "632 Years.",
  "lorem ipsum",
  "hallo",
  "wurst",
  "answer 5.",
];
const answersBookmarks = [
  "Nummer 1",
  "Gabelung",
  "Zeit",
  "Testen",
  "answer bookmarks 5",
];
let answerOutput = [];

if (document.URL.includes("bookmarks.html")) {
  answerOutput = answersBookmarks;
} else {
  answerOutput = answersIndex;
}

for (let i = 0; i < numberOfCards; i++) {
  console.log(i);
  show_answer[i].addEventListener("click", () => {
    answer[i].innerHTML =
      answer[i].innerHTML === "..." ? answerOutput[i] : "...";
    show_answer[i].children[0].innerHTML =
      show_answer[i].children[0].innerHTML === "Show answer."
        ? "Hide answer."
        : "Show answer.";
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
