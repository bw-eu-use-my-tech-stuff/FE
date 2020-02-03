import React from 'react';

function ForRentForm(){

    return(
        <div>
            <h1>Rent My Stuff</h1>

            <form>
                <label>Ad Title</label>
                <input 
                placeholder="What do you have to rent out.."
                type="text"
                name="AdTitle"
                />

                <label>Price</label>
                <input 
                placeholder="Price per day"
                type="text"
                name="Price"
                />

                <label>Description</label>
                <input 
                placeholder="Description"
                type="text"
                name="Description"
                />

                <button>Rent it! </button>
            </form>
        </div>
    )
}

export default ForRentForm;