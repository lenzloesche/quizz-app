export function writeQuestionCounter(questions, questionString) {
  if (questions != null) {
    questionString.textContent = "x" + questions.length;
  }
}

export function writeBookmarkCounter(bookmarked, bookmarkString) {
  if (bookmarked != null) {
    let counter = 0;
    for (const item of bookmarked) {
      if (item === true) {
        counter++;
      }
    }
    bookmarkString.textContent = "x" + counter;
  }
}
