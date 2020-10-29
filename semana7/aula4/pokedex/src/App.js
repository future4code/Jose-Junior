import React, { Component } from 'react';
import AllPokemonsDiv from './Components/AllPokemosDiv';
import {Nav} from './Components/MenuNav'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Nav></Nav>
        <AllPokemonsDiv></AllPokemonsDiv>
      </div>
     );
  }
}
 
export default App;