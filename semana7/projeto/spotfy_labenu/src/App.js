import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import CreatePlaylist from './Components/CreatePlaylist';
import GetPlaylists from './Components/GetPlaylists';

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div>
        <CreatePlaylist/>
        <GetPlaylists/>
      </div>
     );
  }
}
 
export default App;