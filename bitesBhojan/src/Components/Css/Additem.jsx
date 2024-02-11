import React, { useState } from 'react';

const FoodItem = ({ name, onRemove }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleRemove = () => {
        onRemove(name);
    };

    return (
        <div className="flex items-center justify-between border-b py-2">
            <div>
                <span>{name}</span>
            </div>
            <div className="flex items-center">
                <button onClick={handleDecrement} className="text-sm mr-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring rounded-full">
                    -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button onClick={handleIncrement} className="text-sm ml-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring rounded-full">
                    +
                </button>
                <button onClick={handleRemove} className="text-sm ml-4 px-2 py-1 bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring rounded-full">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default FoodItem;
