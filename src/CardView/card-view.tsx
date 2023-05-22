import React from 'react';
interface CardViewProps {
    rank: string;
    suit: string;
}
const CardView: React.FC<CardViewProps> = props => {
    const getSuit = ({suit}: { suit: string }) => {
      switch (suit) {
          case 'diams' :
              return '♦';
          case 'hearts' :
              return '♥';
          case 'clubs' :
              return '♣';
          case 'spades' :
              return '♠';
          default:
              console.log('Неверное значение');
      }
    };

    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    return (
        <span className={cardClasses}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{getSuit({suit: props.suit})}</span>
        </span>
    );
};
export default CardView;