import React from 'react';
import './App.css';
import CardView from "./CardView/card-view";

function App() {
  return (
    <div className="App">
        <div className="playingCards faceImages">
            <CardView rank="K" suit="diams" />
            <CardView rank="Q" suit="hearts" />
            <CardView rank="K" suit="clubs" />
            <CardView rank="K" suit="spades" />
            <CardView rank="K" suit="clubs" />
        </div>
    </div>
  );
}

export default App;
