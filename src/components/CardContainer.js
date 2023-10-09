import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  return (
    <div className="cards-container">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          imgUrl={card.imgUrl}
        />
      ))}
    </div>
  );
};

export default CardContainer;
