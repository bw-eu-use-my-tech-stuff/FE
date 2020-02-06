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
const Button = styled.button`
font-size: 1em;
margin: 1em;
color: orange;
padding: 0.25em 1em;
border-radius: 3px;
`;

function RentItemCard(props){

    console.log(props);

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
            <Button onClick={rentItem}>Rent This item</Button>
        </Box>
    )
}

const rentItem = event => {
    console.log('you clicked it');
    event.preventDefault();
    // props.data.history.push('/renterRegister');
}


export default RentItemCard;