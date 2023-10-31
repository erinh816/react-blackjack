import _ from "lodash";

const API_URL = "https://deckofcardsapi.com/static/img/";

function Cards() {
  const suit = ["H", "S", "D", "C"];
  const ranks = ["A", "2", "3","4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];

  const firstCard = _.sample(ranks) + _.sample(suit);
  let secondCard = _.sample(ranks) + _.sample(suit);

  while(firstCard === secondCard){
    secondCard = _.sample(ranks) + _.sample(suit);
  }

  return (
    <div>
      <img src={API_URL + firstCard + ".png"}></img>
      <img src={API_URL + secondCard + ".png"}></img>
    </div>
  )

};

export default Cards;
