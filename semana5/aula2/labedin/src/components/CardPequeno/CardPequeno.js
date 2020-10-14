import React from 'react';
import './CardPequeno.css'



export default function CardPequeno(props){

    return (
        <div className='smallcard-container'>
            <img src={props.imagem}/>
            <div>
                <h4>{props.nome} :</h4>
                <p> {props.info}</p>
            </div>

        </div>
    )
}
