import React, { Component } from 'react';
import styled from 'styled-components'


const NavPokedex = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vw;
    background-color: #d82c2c;

`
const Title = styled.h1`
    color: white;
`

export function Nav (){

    return (
        <NavPokedex>
            <Title>POKEDEX</Title>
        </NavPokedex>
    )
}