export function bookmarkClick(webElements, bookmarked) {
  for (let i = 0; i < webElements.bookmarks.length; i++) {
    webElements.bookmarks[i].addEventListener("click", () => {
      if (!webElements.card[i].classList.contains("card-dissapear")) {
        if (bookmarked[i] === true) {
          bookmarked[i] = false;
          webElements.bookmarks[i].src = "images/bookmark_white.svg";
          webElements.bookmarks[i].classList.remove("card__bookmark-big");
          if (document.URL.includes("bookmarks.html")) {
            webElements.card[i].classList.add("card-dissapear");
            let timeoutId = setTimeout(hideCard, 1000, i, webElements);
          }
        } else {
          bookmarked[i] = true;
          webElements.bookmarks[i].src = "images/bookmark_black.svg";
          webElements.bookmarks[i].classList.add("card__bookmark-big");
        }
        sessionStorage.setItem("bookmarked", JSON.stringify(bookmarked));
      }
    });
  }
}
function hideCard(i, webElements) {
  webElements.card[i].classList.add("display-none");
}
