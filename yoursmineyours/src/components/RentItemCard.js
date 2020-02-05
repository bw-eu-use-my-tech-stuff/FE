import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
border: 3px solid green;
background-color: lightgray;
font-family: Ariel;
border-radius: 12px;
margin: 0 auto;
padding: 20px 20px;
`

const Text = styled.h3`
font-family: Ariel;
`


function RentItemCard(props){

    console.log('Props from RentItemCard: ' + props.data.name);

    return(

        <Box>
            <Text>Equipment:</Text>
            <p>{props.data.name}</p>
            <Text>Category:</Text>
            <p>{props.data.category}</p>
            <Text>Cost:</Text>             
            <p>{props.data.cost}</p>
            <Text>Description:</Text>
            <p>{props.data.description}</p>
            <button onClick={rentItem}>Rent This item</button>
        </Box>
    )
}

const rentItem = event => {
    // console.log(props);
    // props.history.push('/renterlogin');
}


export default RentItemCard;