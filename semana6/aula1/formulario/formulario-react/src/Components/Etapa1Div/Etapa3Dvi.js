import React, { Component } from 'react';
import {MyInput, MyLabel, FormDiv} from '../Etapa1Div/Etapa1Div'

class Etapa3Div extends Component {
    
    render() { 
        return ( 
            <FormDiv>
            <h1>Etapa 3 - Informacoes Gerais de ensino</h1>
            <MyLabel>5- Porque nao terminou o curso de graduacao?</MyLabel>
            <MyInput type="text" onChange={this.props.onChangeN} value={this.props.valorN} />
            <MyLabel>6- Fez Algum Curso Complementar?</MyLabel>
        <select onChange={this.props.onChangeEsc}>
            <option value="nenhum"> Nenhum </option>
            <option value="Ingles"> Ingles </option>
        </select>
                <br/>
            <button onClick={this.props.onEventClick}>Proxima Etapa</button>
          </FormDiv> 
         );
    }
}
 
export default Etapa3Div;