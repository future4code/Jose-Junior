import React, { Component } from 'react';
import styled from 'styled-components'

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const MyInput = styled.input`
    margin: 10px;
    padding: 5px;

`
export const MyLabel = styled.p`
    font-family: sans-serif;
    font-size: large;
    margin: 5px;
`

class Etapa1Div extends Component {
    
    render() { 
        return ( 
            <FormDiv>
        <h1>Etapa 1 - Dados Gerais</h1>
        <MyLabel>1- Qual o Seu Nome?</MyLabel>
        <MyInput type="text" onChange={this.props.onChangeN} value={this.props.valorN} />
        <MyLabel>2- Qual o Sua Idade?</MyLabel>
        <MyInput type="text" onChange={this.props.onChangeI} value={this.props.valorI}/>
        <MyLabel>3- Qual o Seu Email?</MyLabel>
        <MyInput type="text" onChange={this.props.onChangeE} value={this.props.valorE}/>
        <MyLabel>4- Qual o Sua Escolaridade?</MyLabel>
        <select onChange={this.props.onChangeEsc}>
            <option value="Ensino Médio Incompleto"> Ensino Médio Incompleto </option>
            <option value="Ensino Médio completo"> Ensino Médio completo </option>
            <option value="Ensino Superior completo"> Ensino Superior completo </option>
            <option value="Ensino Superior Incompleto"> Ensino Superior Incompleto </option>
        </select>
        <br/>
        <button onClick={this.props.onEventClick}>Proxima Etapa</button>
      </FormDiv> 
         );
    }
}
 
export default Etapa1Div;