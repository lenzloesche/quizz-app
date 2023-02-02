const showAnswer = document.querySelector('[data-js="showanswer"]');
const answer = document.querySelector('[data-js="answer"]');

showAnswer.addEventListener("click", () => {
  answer.innerHTML = answer.innerHTML === "..." ? "632 Years." : "...";
});
