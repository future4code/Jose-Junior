import React, { Component } from 'react';
import './App.css';
import Etapa1Div, { FormDiv } from './Components/Etapa1Div/Etapa1Div'
import Etapa2Div from './Components/Etapa1Div/Etapa2Div';
import Etapa3Div from './Components/Etapa1Div/Etapa3Dvi';

class App extends Component {

  state = { 
      etapa1: true,
      etapa2: false,
      etapa3: false,
      etapa4: false,
      valorEscolaridade:''
  }
  
  onChangeEscolaridade =(event)=>{

    this.setState({valorEscolaridade: event.target.value})
  }

  changeEtapa1 = ()=>{
      if(this.state.valorEscolaridade === 'Ensino Superior completo'){
        this.setState({etapa1: false, etapa2: true})
      }else{
        this.setState({etapa1: false, etapa3: true})
      }
    }
  changeEtapa2 = ()=>{
    this.setState({etapa2: false, etapa3: false, etapa4: true})
  }

 
  render() {
  
    return (
      <div>
        {this.state.etapa1 && <Etapa1Div
          onChangeEsc={this.onChangeEscolaridade}
          onEventClick={this.changeEtapa1}
        />}
        {this.state.etapa2 && <Etapa2Div
          onEventClick={this.changeEtapa2}
        />}
        {this.state.etapa3 && <Etapa3Div
          onEventClick={this.changeEtapa2}
        />}
        {this.state.etapa4 && <FormDiv>
          <h2>O Formulario Acabou!</h2>
          <h3>Muito obrigado por participar, entraremos em contato</h3>
          </FormDiv>}
      </div>
    )
}}
 
export default App;
