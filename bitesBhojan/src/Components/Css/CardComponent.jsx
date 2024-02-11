
import React, { useState, useEffect } from 'react';

const CardComponent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards'); // Assuming your backend server runs on the same host
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      {cards.map(card => (
        <div key={card._id} className="card">
          <img src={card.imageUrl} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
