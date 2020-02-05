import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OwnerDashboard(){


    const [ item, setItem ] = useState({
        title: '',
        price: ''
    });

    useEffect(() => {
    })

    const addItem = event => {
        event.preventDefault();
        console.log(item);
    }

    const changeHandler = event => {
        
    }

    return(
        <div>
            <h1>Here you are in the Owner Dashboard.</h1>

            <form>
                <h2>Rent your products. Earn money.</h2>
                <label>Title:</label>
                <input
                placeholder="Title"
                name="title"
                />
                <label>Price(Per day):</label>
                <input
                type="number"
                placeholder="Price"
                name="price"
                />
                <button onClick={addItem}>Add Item</button>

            </form>
        </div>


    )
}

export default OwnerDashboard;