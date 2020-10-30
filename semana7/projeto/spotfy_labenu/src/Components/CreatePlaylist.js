import axios from 'axios';
import React, { Component } from 'react';

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
        }).catch(error=>{
            console.log(error.message)
        })
    }

    render() { 
        return ( 
            <div>
                <label htmlFor="playlist">New PlayList</label>
                <input 
                 type="text" 
                 value={this.state.playlistName} 
                 onChange={(e)=> this.setState({playlistName: e.target.value})}
                 id="playlist"/>
                <button onClick={this.postPlaylist}>Add</button>
            </div>
         );
    }
}
 
export default CreatePlaylist;