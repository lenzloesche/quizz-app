import { refreshCounters } from "../Card/createCard.js";

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
      webElements.inputQuestion.value = unescapeHTML(question);
      webElements.inputAnswer.value = unescapeHTML(answer);
      webElements.inputTag1.value = unescapeHTML(tag);
      refreshCounters(webElements);
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

var htmlEntities = {
  nbsp: " ",
  cent: "¢",
  pound: "£",
  yen: "¥",
  euro: "€",
  copy: "©",
  reg: "®",
  lt: "<",
  gt: ">",
  quot: '"',
  amp: "&",
  apos: "'",
};

function unescapeHTML(str) {
  return str.replace(/\&([^;]+);/g, function (entity, entityCode) {
    var match;

    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
      /*eslint no-cond-assign: 0*/
    } else if ((match = entityCode.match(/^#x([\da-fA-F]+)$/))) {
      return String.fromCharCode(parseInt(match[1], 16));
      /*eslint no-cond-assign: 0*/
    } else if ((match = entityCode.match(/^#(\d+)$/))) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
}
