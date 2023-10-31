import _ from "lodash";

const API_URL = "https://deckofcardsapi.com/static/img/";

function Cards() {
  const suit = ["H", "S", "D", "C"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];
  let score = 0;

  const firstCard = _.sample(ranks) + _.sample(suit);
  let secondCard = _.sample(ranks) + _.sample(suit);

  while (firstCard === secondCard) {
    secondCard = _.sample(ranks) + _.sample(suit);
  }

  if (["A", "J", "Q", "K"].includes(firstCard[0])) {
    if (firstCard[0] === "A") {
      score += 11;
    } else {
      score += 10;
    }
  } else {
    score += parseInt(firstCard[0]);
  }

  if (["A", "J", "Q", "K"].includes(secondCard[0])) {
    if (secondCard[0] === "A") {
      score += 11;
    } else {
      score += 10;
    }
  } else {
    score += parseInt(secondCard[0]);
  }

  return (
    <div>
      <img src={API_URL + firstCard + ".png"}></img>
      <img src={API_URL + secondCard + ".png"}></img>
      <p>Score:{score}</p>
    </div>
  );

};

export default Cards;
