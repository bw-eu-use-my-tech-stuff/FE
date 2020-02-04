import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
border: 3px solid red;
font-family: New Courier;
border-radius: 12px;
margin: 0 auto;
padding: 20px 20px;

`

function RentItemCard(props){

    console.log('Props from RentItemCard: ' + props.data.name);

    return(

        <Box>
            <p>{props.data.name}</p>
            <p>{props.data.category}</p>
            <p>{props.data.cost}</p>
            <p>{props.data.user_id}</p>
            <p>{props.data.available}</p>
            <p>{props.data.description}</p>
        </Box>
    )
}

export default RentItemCard;