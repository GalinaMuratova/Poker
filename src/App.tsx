import React from 'react';
import './App.css';
import CardView from "./CardView/card-view";
import CardDeck from "./lib/CardDeck";

function App() {
    const cardDeck = new CardDeck();
    console.log(cardDeck.deck);
    console.log(cardDeck.getCards(5));
    console.log(cardDeck.deck);
    console.log(cardDeck.getCards(5))
  return (
    <div className="App">
        <div className="playingCards faceImages">
            <CardView rank="K" suit="diams" />
            <CardView rank="Q" suit="hearts" />
            <CardView rank="2" suit="clubs" />
            <CardView rank="10" suit="spades" />
            <CardView rank="A" suit="clubs" />
        </div>
    </div>
  );
}

export default App;
