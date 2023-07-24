import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <div>
      <h2>Card List</h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardList;