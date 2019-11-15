import React from 'react';
import styled from "styled-components";

const Header = ({className}) =>{
    return(
        <header className={className}>
            <span>Scale Up</span>
        </header>
    )
}

export default styled(Header)`
    text-transform: uppercase;
    margin: 0 -16px;
    padding: 16px;
    font-size: 2em;
    font-weight: bold;
    background-color: #111
    color:#ffd
`