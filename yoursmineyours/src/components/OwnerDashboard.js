import React, { useState } from 'react';

function OwnerDashboard(){


    const [ item, setItem ] = useState({
        title: '',
        price: ''
    });

    const addItem = event => {
        event.preventDefault();
        console.log(item);
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