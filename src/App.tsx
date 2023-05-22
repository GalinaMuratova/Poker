import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/card-view";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";

function App() {
    const [cards, setCards] = useState<Card[]>([]);
    const [outcome, setOutcome] = useState<string>('');
    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);

        const pokerHand = new PokerHand(newCards);
        const currentOutcome = pokerHand.getOutcome();
        setOutcome(currentOutcome);
    };

    if (cards.length === 0) {
        return (
            <button className="btn-get-cards" onClick={getCards}>Раздать колоду</button>
        );
    }
  return (
    <div className="App">
        <div className="playingCards faceImages">
            <h2>{outcome}</h2>
            {cards.map((card) => (
                <CardView rank={card.rank} suit={card.suit} />
            ))}
        </div>
        <button className="btn-get-cards" onClick={getCards}>Раздать колоду</button>
    </div>
  );
}
export default App;
