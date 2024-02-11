import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Thali = () => {
    const [foodData, setFoodData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/food'); // Replace with your backend API endpoint
            setFoodData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const filteredData = foodData.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = filteredData.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={handleSort}>Sort</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {foodData.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    sortedData.map((food) => (
                        <div key={food.id} className="bg-white p-4 shadow-md">
                            <h2 className="text-lg font-bold">{food.name}</h2>
                            <p>{food.description}</p>
                            <p>Price: {food.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Thali;
