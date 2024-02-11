import React from 'react';

const Card = ({cards}) => {

    return (

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
                
                <div key={card.id} className="bg-white p-4 shadow-md rounded-lg">
                    <img src={card.image} alt={card.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.details}</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                        View Details
                    </button>
                </div>
            ))}
        </div>
       
    );
};

export default Card;
