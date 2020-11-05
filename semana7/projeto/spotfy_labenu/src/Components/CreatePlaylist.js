import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components'
import vinil from '../img/vinil.png'


export const PostNav = styled.nav`
    width: 30vw;
    min-height: 50vh;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1a1919;
    border-right: 1px solid green;
    @media screen and (max-width: 500px){
       position: absolute;
       top: 100px;
       right: 0px;
       width: 100vw;
       min-height: 300px;
       padding: 0px;
       z-index: 2;
   }
    
`
export const LabelInput = styled.label`
    margin-left: 10px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-transform:uppercase ;
    letter-spacing: 2px;
   
`

export const Input = styled.input`
    outline: none;
    border: none;
    height: 30px;
    width: 90%;
    margin: 10px;
    font-size: 16px;
    border-radius: 5px;
`

export const ButtonCreate = styled.button`
    margin: 10px;
    outline: none;
    border: none;
    background: none;
    height: 40px;
    border-radius: 5px;
    border: 2px solid green;
    color: green;
    width: 90%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 15px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover{
        background: green;
        color: black;
    }
`
const DivImag = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: green;
    margin-bottom: 20px;
    margin-top: 30px;
`
const ImgDisco = styled.img`
    animation:spin 4s linear infinite;
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

`


class CreatePlaylist extends Component {
    state = { 
        playlistName:'' 

    }

    postPlaylist = ()=>{
        const body = {
            name: this.state.playlistName
        }
        const urlPost = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.post(urlPost, body, {
            headers: {
                Authorization: "jose-junior-dumont"
            }
        }).then(response=>{
            console.log('criado')
            this.setState({playlistName : ''})
        }).catch(error=>{
            console.log(error.message)
        })
    }

    render() { 
        return ( 
            <PostNav>
                <DivImag>
                    <ImgDisco src={vinil} alt=""/>
                </DivImag>
                
                <LabelInput htmlFor="playlist">New PlayList</LabelInput>
                <Input
                 type="text" 
                 value={this.state.playlistName} 
                 onChange={(e)=> this.setState({playlistName: e.target.value})}
                 id="playlist"/>
                <ButtonCreate onClick={this.postPlaylist}>Add</ButtonCreate>
            </PostNav>
         );
    }
}
 
export default CreatePlaylist;