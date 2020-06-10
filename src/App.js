import React, { Component } from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard.jsx";

/**
 * Shuffles array in place. ES6 version
 * param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateDeck() {
  var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  var deck = [];
  for (let i = 0; i < 16; i++) {
    let card = { isFlipped: false, symbol: symbols[i % 8] };
    deck.push(card);
  }
  return shuffle(deck);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { deck: generateDeck(), pickedCards: [] };
  }

  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    var cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    var newPickedCards = this.state.pickedCards.concat(cardIndex);
    var newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length === 2) {
      var card1Index = newPickedCards[0];
      var card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {
          this.unflipCards(card1Index, card2Index);
        }, 1000);
      }
      newPickedCards = [];
    }
    this.setState({ deck: newDeck, pickedCards: newPickedCards });
  };

  unflipCards = (card1Index, card2Index) => {
    var card1 = { ...this.state.deck[card1Index] };
    var card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    var newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    });
    this.setState({ deck: newDeck });
  };

  render() {
    var cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          key={index}
          pickCard={() => {
            this.pickCard(index);
          }}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">Memory Game</p>
          <p className="App-subtitle">Match Cards To Win</p>
        </header>
        <div>{cardsJSX.slice(0, 4)}</div>
        <div>{cardsJSX.slice(4, 8)}</div>
        <div>{cardsJSX.slice(8, 12)}</div>
        <div>{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
