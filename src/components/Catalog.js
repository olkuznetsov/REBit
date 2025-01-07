import React, { useEffect, useState } from 'react';

const Catalog = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/api/items'); // Adjust the API endpoint as needed
            const data = await response.json();
            setItems(data);
        };

        fetchItems();
    }, []);

    return (
        <div className="catalog">
            <h2>Available Items</h2>
            <div className="item-list">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;