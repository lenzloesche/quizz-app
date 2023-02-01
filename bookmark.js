const body = document.querySelector('[data-js="body"]');
const card = document.querySelector('[data-js="card"]');
const header = document.querySelector('[data-js="header"]');
const footer = document.querySelector('[data-js="footer"]');

let darkmodeOn = sessionStorage.getItem("darkModeOn");

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  card.classList.toggle("card--dark-mode");
  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
}
