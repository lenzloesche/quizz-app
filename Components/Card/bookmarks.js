export function bookmarkClick(bookmarked) {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  const card = document.querySelectorAll('[data-js="card"]');

  for (let i = 0; i < bookmarks.length; i++) {
    bookmarks[i].addEventListener("click", function () {
      bookmarkClickFunction(bookmarked, i);
    });
  }
}

export function bookmarkClickFunction(bookmarked, i) {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  const bookmark_black = "./../../images/bookmark_black.svg";
  const bookmark_white = "./../../images/bookmark_white.svg";

  let reverseIndex = i;
  if (document.URL.includes("form.html")) {
    reverseIndex = bookmarked.length - 1 - i;
  }
  if (bookmarked[reverseIndex] === false) {
    bookmarked[reverseIndex] = true;
    bookmarks[i].src = bookmark_black;
    bookmarks[i].classList.add("card__bookmark-big");
  } else {
    bookmarked[reverseIndex] = false;
    bookmarks[i].src = bookmark_white;
    bookmarks[i].classList.remove("card__bookmark-big");
  }
  sessionStorage.setItem("bookmarked", JSON.stringify(bookmarked));
}

export function removeEventlistener() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  for (let i = 0; i < bookmarks.length; i++) {
    bookmarks[i].removeEventListener("click", bookmarkClickFunction);
  }
}

export function magnifyBookmark() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  if (document.URL.includes("bookmarks.html")) {
    for (let i = 0; i < bookmarks.length; i++) {
      bookmarks[i].classList.add("card__bookmark-big");
    }
  }
}
