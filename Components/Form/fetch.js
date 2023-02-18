export async function getQuestion(webElements) {
  try {
    webElements.buttomRandom.disabled = true;
    webElements.buttomRandom.textContent = "...";
    webElements.randomOutput.textContent = "Fetching Random Card";
    const fetchJson = await fetch("https://opentdb.com/api.php?amount=1");
    if (fetchJson.ok) {
      const fetchJs = await fetchJson.json();

      const question = fetchJs.results[0].question;
      const answer = fetchJs.results[0].correct_answer;
      const tag = fetchJs.results[0].category;
      webElements.inputQuestion.value = question;
      webElements.inputAnswer.value = answer;
      webElements.inputTag1.value = tag;

      webElements.randomOutput.textContent = "Fetching Successful";
    }
  } catch (error) {
    console.log("Fetching failed...");
    console.log(error);
    webElements.randomOutput.textContent = "Fetching failed";
  } finally {
    webElements.buttomRandom.disabled = false;
    webElements.buttomRandom.textContent = "Generate Random Card";
  }
}
