const API_URL = "https://deckofcardsapi.com/api/deck/";

async function Cards() {
  const response = await fetch(`${API_URL}/new/shuffle/?deck_count=1`);
  const deck = await response.json();
  console.log(deck);
};

export default Cards;
