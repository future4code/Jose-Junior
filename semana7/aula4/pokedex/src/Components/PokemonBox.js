import React, { Component } from 'react';
import styled from 'styled-components'

const PokemonDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 2.5px;
    background-color: ${props=> props.pokemonColor?
    props.pokemonColor: 'white'
    };
    height: 160px;
    width: 160px;
    border-radius: 20px;
    cursor: pointer;
`
const NomePokemon = styled.p`
    align-self: center;
    justify-self: flex-end;
    color: white;
    margin: 5px;
    font-weight: bold;
    font-size: 14px;
`
const ImgPokemon = styled.img`
    height: 100px;
    width: 100px;
`
function PokemonBox (props) {
    
   
        return ( 
          <PokemonDiv 
            pokemonColor={props.pokemonColor}
           onClick={props.onClickPokemon}
            >
                <ImgPokemon 
                 src={props.pokemonImage}
                />
                <NomePokemon>
                    {props.pokemonName}
                </NomePokemon>
           </PokemonDiv>
         );
    
}
 
export default PokemonBox;