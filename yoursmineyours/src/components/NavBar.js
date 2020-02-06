import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
background-color: #333;
height: 100px;
color: white;
text-decoration: none;
align-items; centre;
justify-content: centre;
`

const HomeText = styled.h1`
color: white;
text-decoration: none;
`

function NavBar(){

    return(
        <Nav>
            <Link to="/"><HomeText>YoursMineYours</HomeText></Link>    
        </Nav>
    )
}

export default NavBar;