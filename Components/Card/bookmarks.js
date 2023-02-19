export function bookmarkClick(bookmarked) {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  const card = document.querySelectorAll('[data-js="card"]');
  const bookmark_black = "./../../images/bookmark_black.svg";
  const bookmark_white = "./../../images/bookmark_white.svg";

  for (let i = 0; i < bookmarks.length; i++) {
    bookmarks[i].addEventListener("click", () => {
      if (!card[i].classList.contains("card-dissapear")) {
        if (bookmarked[i] === true) {
          bookmarked[i] = false;
          bookmarks[i].src = bookmark_white;
          bookmarks[i].classList.remove("card__bookmark-big");
          if (document.URL.includes("bookmarks.html")) {
            card[i].classList.add("card-dissapear");
            let timeoutId = setTimeout(hideCard, 1000, i, card);
          }
        } else {
          bookmarked[i] = true;
          bookmarks[i].src = bookmark_black;
          bookmarks[i].classList.add("card__bookmark-big");
        }
        sessionStorage.setItem("bookmarked", JSON.stringify(bookmarked));
      }
    });
  }
}
function hideCard(i, card) {
  card[i].classList.add("display-none");
}

export function magnifyBookmark() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

  if (document.URL.includes("bookmarks.html")) {
    for (let i = 0; i < bookmarks.length; i++) {
      bookmarks[i].classList.add("card__bookmark-big");
    }
  }
}
