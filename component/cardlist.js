// CardList.js
import React from 'react';
import Card from './card';

const CardList = () => {
  const cardsData = [
    {
      title: 'Card 1',
      imageUrl: 'https://via.placeholder.com/400x200',
      description: 'This is the description for card 1.'
    },
    {
      title: 'Card 2',
      imageUrl: 'https://via.placeholder.com/400x200',
      description: 'This is the description for card 2.'
    },
    {
      title: 'Card 3',
      imageUrl: 'https://via.placeholder.com/400x200',
      description: 'This is the description for card 3.'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
