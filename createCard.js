export function createCard(cardNumber, bookmarked, tags) {
  let bookmarksImage;
  if (bookmarked[cardNumber] === true) {
    bookmarksImage = "images/bookmark_black.svg";
  } else {
    bookmarksImage = "images/bookmark_white.svg";
  }

  const section = document.createElement("section");
  const main = document.querySelector('[data-js="main"]');
  main.append(section);
  if (
    document.URL.includes("bookmarks.html") &&
    bookmarked[cardNumber] === false
  ) {
    section.classList.add("display-none");
  }
  section.classList.add("card");
  section.setAttribute("data-js", "card");
  section.innerHTML = `
          <img
            src="${bookmarksImage}"
            alt="bookmark icon"
            class="card__bookmark"
            data-js="bookmark"
          />
  
          <p class="card__question card__bigtext" data-js="question" >
            .
          </p>
  
          <button data-js="show_answer" class="card__showanswer shadow">
            <p class="card__bigtext">Show answer.</p>
          </button>
          <p class="card__answer card__bigtext" data-js="answer">...</p>
  
          <ul class="card__tags">
            
          </ul>`;

  let innerHTML = "";
  for (let j = 0; j < tags[cardNumber].length; j++) {
    if (tags[cardNumber][j] != "") {
      innerHTML += `<li data-js="tag" class="card__tag shadow"><p>#${tags[cardNumber][j]}</p></li>`;
    }
    section.children[4].innerHTML = innerHTML;
  }
}
