import React, { Component } from 'react';
import {MyInput, MyLabel, FormDiv} from '../Etapa1Div/Etapa1Div'

class Etapa2Div extends Component {
    
    render() { 
        return ( 
            <FormDiv>
            <h1>Etapa 2 - Informacoes do ensino superior</h1>
            <MyLabel>5- Qual o Curso?</MyLabel>
            <MyInput type="text" onChange={this.props.onChangeN} value={this.props.valorN} />
            <MyLabel>6- Qual Unidade de Ensino?</MyLabel>
            <MyInput type="text" onChange={this.props.onChangeI} value={this.props.valorI}/>
          
            <button onClick={this.props.onEventClick}>Proxima Etapa</button>
          </FormDiv> 
         );
    }
}
 
export default Etapa2Div;