class Round {
  constructor(deck) {
    this.deck = deck.cards;
  }
  
  currentCard() {
    return this.deck.shift();
  }
}

module.exports = Round;