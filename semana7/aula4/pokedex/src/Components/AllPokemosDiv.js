import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import PokemonBox from './PokemonBox';
import InfoPokemon from './InfoPokemon';

const MainDiv = styled.div`
    background-color: #1b1b1b;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
`



class AllPokemonsDiv extends Component {
    state = { 
        pokemonsList: [],
        pokemonStat:[],
        showPkms: true,
        showPkmnSt: false
     }
     componentDidMount = ()=>{
         this.getPokemons()
     }
     getPokemons = () =>{
        const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=100";
         axios.get(apiUrl).then(response=>{
             const pokemos = response.data.results.map(pokemon=>{
                 axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(response2=>{
                     let pokemonObj = { 
                        id: response2.data.id,
                        name: response2.data.name,
                        image: response2.data.sprites.front_default
                     }
                     axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response2.data.id}`).then(response3=>{
                         const pokemonObj2 = {
                             ...pokemonObj,
                             color: response3.data.color.name
                         }
                         const newList = [...this.state.pokemonsList, pokemonObj2]
                         this.setState({pokemonsList: newList})
                     })
                 })
             })
         })
     }

     getPokemonStats = (id, name, image, color)=>{
            const apiUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`
            axios.get(apiUrl).then(response=>{
                let pokemonStat = {
                    name: name,
                    id: id,
                    imagem: image,
                    color: color,
                    captureRate: response.data.capture_rate,
                    habitat: response.data.habitat.name,
                    grow: response.data.growth_rate.name,

                }
                this.setState({pokemonStat: pokemonStat, showPkmnSt:true, showPkms:false})
                console.log(this.state.pokemonStat)
            })
     }
     backToHome = () =>{
         this.setState({showPkms: true,
            showPkmnSt: false})
     }
    render() { 
        return ( 
            <MainDiv>
                {this.state.showPkms && this.state.pokemonsList.map(pokemon=>{
                    return <PokemonBox key={pokemon.id}
                pokemonColor={pokemon.color}
                onClickPokemon={()=> this.getPokemonStats(pokemon.id, pokemon.name, pokemon.image, pokemon.color)}
                pokemonImage={pokemon.image}
                pokemonName={pokemon.name}
                />
                })}
                {
                    this.state.showPkmnSt && 
                    <InfoPokemon
                     pokemonColor={this.state.pokemonStat.color}
                     pokemonImage={this.state.pokemonStat.imagem}
                     pokemonName={this.state.pokemonStat.name}
                     pokemonHabitat={this.state.pokemonStat.habitat}
                     pokemonCapture={this.state.pokemonStat.captureRate}
                     pokemonGrow={this.state.pokemonStat.grow}
                     onClickButton={this.backToHome}
                    ></InfoPokemon>
                }
            </MainDiv>
         );
    }
}
 
export default AllPokemonsDiv;