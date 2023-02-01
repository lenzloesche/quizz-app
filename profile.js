const body = document.querySelector('[data-js="body"]');
const card = document.querySelector('[data-js="card"]');
const header = document.querySelector('[data-js="header"]');
const footer = document.querySelector('[data-js="footer"]');
const counter1 = document.querySelector('[data-js="counter1"]');
const counter2 = document.querySelector('[data-js="counter2"]');
const darkModeSwitch = document.querySelector('[data-js="dark-mode-switch"]');
let darkmodeOn = sessionStorage.getItem("darkModeOn");

darkModeSwitch.addEventListener("click", () => {
  if (darkmodeOn == "0" || !darkmodeOn) {
    darkModeSwitch.src = "/images/switch_on.svg";
    sessionStorage.setItem("darkModeOn", "1");
    darkmodeOn = "1";
  } else {
    darkModeSwitch.src = "/images/switch_off.svg";
    sessionStorage.setItem("darkModeOn", "0");
    darkmodeOn = "0";
  }
  changeTheme();
});

function changeTheme() {
  body.classList.toggle("body--dark-mode");
  card.classList.toggle("card--dark-mode");
  header.classList.toggle("card--dark-mode");
  footer.classList.toggle("card--dark-mode");
  counter1.classList.toggle("card--dark-mode");
  counter2.classList.toggle("card--dark-mode");
}
if (darkmodeOn == "1") {
  changeTheme();
  darkModeSwitch.src = "/images/switch_on.svg";
}
