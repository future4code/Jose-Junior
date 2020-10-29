import React, { Component } from 'react';

import styled from 'styled-components'


const MainDiv = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 30vw;
    @media screen and (max-width: 500px){
        height: 100vh;
        width: 100vw;
    }
`
const DivImage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    justify-self: flex-start;
    width: 100%;
    height: 40%;
    margin-top: -100px;
    margin-bottom: 20px;
    background-color: ${props => props.colorPokemon?
    props.colorPokemon: 'grey'    
};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

`

const ImgPokemon = styled.img`
    height: 300px;
    width: 300px;
    `
const PokemonName = styled.h2`
    color: #1d1d1d;
    margin-bottom: 50px;
    margin-top: -30px;

`
const BackButton = styled.button`
    outline: none;
    border: none;
    background-color: lightblue;
    color: white;
    justify-self: flex-end;
    margin-bottom: 30px;
    width: 70%;
    height: 50px;
    font-size: 20px;
    border-radius: 7px;
    align-self: center;
    margin-left: 50px;
    
    cursor: pointer;
`
const Info = styled.p`
    color: #f36d55;
    font-size: large;
    align-self: flex-start;
    justify-self: flex-end;
    margin-left: 10px;
    margin-top: 0px;
    background-color: #cfb43e;
    border-radius: 20px;
    padding: 20px;
`
    
function InfoPokemon (props) {
    
    
        return (  
                <MainDiv>
                    <DivImage colorPokemon={props.pokemonColor}>
                        <ImgPokemon src={props.pokemonImage}/>
                        <PokemonName>{props.pokemonName}</PokemonName>
                    </DivImage>
                        <Info>Capture-rate: {props.pokemonCapture}</Info>
                        <Info>Growth: {props.pokemonGrow}</Info>
                        <Info>Habitat: {props.pokemonHabitat}</Info>
                        
                    <BackButton onClick={props.onClickButton}>Voltar</BackButton>
                </MainDiv>
        );
    
}
 
export default InfoPokemon;