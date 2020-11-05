import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

import { PostNav, Input, LabelInput, ButtonCreate} from './CreatePlaylist'

const SeePlaylist = styled(PostNav)`
   @media screen and (max-width: 500px){
       position: absolute;
       top: 0px;
       right: 0px;
       width: 100vw;
       min-height: 100px;
       padding: 0px;
   }
`

const SelectPlaylist = styled.select`
    width: 90%;
    height: 40px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
`
const ConteudoPlaylist = styled.div`
    position: absolute;
   
    top: 0px;
    right: 0px;
    width: 69.9vw;
    min-height: 100vh;
    max-height: max-content;
    background-color: #1a1919;
    border-left: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-flow: column wrap;
    justify-content: space-between;
    @media screen and (max-width: 500px){
       position: absolute;
       top: 400px;
       right: 0px;
       width: 100vw;
       min-height: 50vh;
       max-height: max-content;
       padding: 0px;
   }
`
const Track = styled.audio`
    filter: sepia(20%) saturate(70%) grayscale(0) contrast(100%) invert(100%);
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    background-color: white;
    border-radius:10px;
`
const TrackName = styled.h3`
    margin: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    display: inline;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const TrackArtist = styled.p`
    margin: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 15px;
    color: white;
    display: inline;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`

const TrackDiv = styled.div`

    margin: 10px;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: black;
    border-radius: 10px;
    width: 90%;
   
`
const TrackDisplayInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const PlayListNav= styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border-bottom: 1px solid white;
   
    margin-top: 0px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 10px rgba(255,255,255, 0.2);
    
    
`
const PlaylistTitle = styled.h1`
    margin-left: 50px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color:#62bd62;
    font-size: 30px;
`
const InfoQuant = styled.p`
    color:white ;
    margin-right: 50px;

`
const FormTrackDiv = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
`


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
         if(id){
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
            localStorage.setItem('playlistInfo', JSON.stringify(playlistInfo))
            }).catch(error=>{
            console.log(error.message)
        })
        }else{
            this.setState({playlistInfo: []})
        }
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
            this.setState({
                trackName: '',
                singerName: '',
                songUrl: ''
            })
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
            <SeePlaylist>
                <SelectPlaylist onChange={this.getPlaylistInfo}> 
                <option value="">Select your playlist here</option>
                    {allPlaylist}
                </SelectPlaylist>
                <ConteudoPlaylist>
                    {this.state.playlistInfo && this.state.playlistInfo.map(playlist=>{
                        return <div key={playlist.name[0].id}>
                            <PlayListNav>
                                <PlaylistTitle>{playlist.name[0].name}</PlaylistTitle>
                            <InfoQuant>total of tracks: <b>{playlist.quantidade}</b></InfoQuant>
                            </PlayListNav>
                            
                            {playlist.tracks.map(track=>{
                                return <TrackDiv>
                                <TrackDisplayInfo>
                                 <TrackName>{track.name}</TrackName>
                                    <TrackArtist> by: {track.artist}</TrackArtist>
                                </TrackDisplayInfo>
                                   
                                    <Track controls src={track.url}></Track>
                                </TrackDiv>
                            })}
                            
                             <LabelInput htmlFor="playlist">New track</LabelInput>
                                <Input 
                                type="text" 
                                value={this.state.trackName} 
                                onChange={(e)=> this.setState({trackName: e.target.value})}
                                id="playlist"/>
                                <LabelInput htmlFor="Singer">Singer or Band name:</LabelInput>
                                <Input 
                                type="text" 
                                value={this.state.singerName} 
                                onChange={(e)=> this.setState({singerName: e.target.value})}
                                id="Singer"/>
                                <LabelInput htmlFor="url">Song link:</LabelInput>
                                <Input 
                                type="text" 
                                value={this.state.songUrl} 
                                onChange={(e)=> this.setState({songUrl: e.target.value})}
                                id="url"/>
                            <ButtonCreate onClick={()=> this.addTrack(playlist.name[0].id)}>Add Track</ButtonCreate>
                        </div>
                    })}
                </ConteudoPlaylist>
            </SeePlaylist>
         );
    }
}
 
export default GetPlaylists;