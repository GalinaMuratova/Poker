import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/card-view";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";

function App() {
    const [cards, setCards] = useState<Card[]>([]);

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
    };

    if (cards.length === 0) {
        return (
            <button onClick={getCards}>Раздать колоду</button>
        );
    }
  return (
    <div className="App">
        <div className="playingCards faceImages">
            {cards.map((card) => (
                <CardView rank={card.rank} suit={card.suit} />
            ))}
        </div>
        <button onClick={getCards}>Раздать колоду</button>
    </div>
  );
}
export default App;
