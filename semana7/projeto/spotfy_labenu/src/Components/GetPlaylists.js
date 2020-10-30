import React, { Component } from 'react';
import axios from 'axios'


class GetPlaylists extends Component {
    state = { 
        playlists : [],
        playlistInfo: [],
        trackName: '',
        singerName: '',
        songUrl: ''

     }

    componentDidMount = ()=>{
        this.getPlaylist()
    }
    componentDidUpdate = ()=>{
        //this.getPlaylist()
    }

     getPlaylist = ()=>{
        const urlPost = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.get(urlPost, {
            headers: {
                Authorization: "jose-junior-dumont"
            }
        }).then(response=>{
            
            this.setState({playlists:response.data.result.list })
            console.log(this.state.playlists)
        }).catch(error=>{
            console.log(error.message)
        })
     }
     deletePlaylist = (id)=>{
        const urlPost = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(urlPost, {
            headers: {
                Authorization: "jose-junior-dumont"
            }
        }).then(response=>{
            console.log('deleted')
            const playlists = this.state.playlists.filter(playlist=>{
                return playlist.id !== id
            })
            this.setState({playlists: playlists})
        }).catch(error=>{
            console.log(error.message)
        })
     }
     showPlaylists = ()=>{
         this.setState({showPlaylists :  !this.state.showPlaylists})
     }

     getPlaylistInfo = (event)=>{
         const id = event.target.value
         const urlPost = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(urlPost, {
            headers: {
                Authorization: "jose-junior-dumont"
            }
        }).then(response=>{
            const playlistInfo = [{
                name: this.state.playlists.filter(play=>{return play.name && play.id === id }),
                quantidade: response.data.result.quantity,
                tracks: response.data.result.tracks,
            }]
            this.setState({playlistInfo: playlistInfo})
            console.log(response.data.result)
            }).catch(error=>{
            console.log(error.message)
        })
     }

     addTrack = (id)=>{
        const urlPost = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.trackName,
            artist: this.state.singerName,
            url: this.state.songUrl
        }
        axios.post(urlPost, body, {
            headers : {
                Authorization: 'jose-junior-dumont'
            }
        }).then(response=>{
            console.log('track add')
        }).catch(error=>{
            console.log(error.message)
        })
     }
     
    render() { 
        const allPlaylist = this.state.playlists.map(playlist=>{
            return(
                <option value={playlist.id} key={playlist.id}>
                    {playlist.name}
                </option>
            )
        })
        return ( 
            <div>
                <select onChange={this.getPlaylistInfo}> 
                    {allPlaylist}
                </select>
                <div>
                    {this.state.playlistInfo && this.state.playlistInfo.map(playlist=>{
                        return <div key={playlist.name[0].id}>
                            <h2>{playlist.name[0].name}</h2>
                            <p>total of tracks: <b>{playlist.quantidade}</b></p>
                            {playlist.tracks.map(track=>{
                                return <>
                                    <h4>{track.name}</h4>
                                    <audio controls src={track.url}></audio>
                                </>
                            })}
                             <label htmlFor="playlist">New track</label>
                                <input 
                                type="text" 
                                value={this.state.trackName} 
                                onChange={(e)=> this.setState({trackName: e.target.value})}
                                id="playlist"/>
                                <label htmlFor="Singer">Singer or Band name:</label>
                                <input 
                                type="text" 
                                value={this.state.singerName} 
                                onChange={(e)=> this.setState({singerName: e.target.value})}
                                id="Singer"/>
                                <label htmlFor="url">Song link:</label>
                                <input 
                                type="text" 
                                value={this.state.songUrl} 
                                onChange={(e)=> this.setState({songUrl: e.target.value})}
                                id="url"/>
                            <button onClick={()=> this.addTrack(playlist.name[0].id)}>Add Track</button>
                        </div>
                    })}
                </div>
            </div>
         );
    }
}
 
export default GetPlaylists;