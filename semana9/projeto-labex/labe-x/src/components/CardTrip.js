import React, { useState } from 'react';
import styled from 'styled-components'



const Card = styled.div`

    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 250px;
    min-height:250px;
    max-height: fit-content;
    box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
    border-radius: 5px;
    background-color: rgba(255,255,255,0.2);
    margin: 10px;
    position: relative;
    overflow: visible;
    

`
const TitleTrip = styled.h2`

    margin-bottom: 5px;

`

const PlanetName = styled.h3`
     color:grey;
     margin-bottom: 10px;
`
const Description = styled.p`

    margin-bottom: 40px;

`
export const ButtonPrimary = styled.button`

    outline: none;
    border-radius: 5px;
    border: none;
    height: 30px;
    width: 100px;
    background-color: #131313;
    color: whitesmoke;
    margin: 5px;
    cursor: pointer;
    transition: 1s ease;
    &:hover{
        background-color: #302f2f;
    }
`
export const ButtonSecondary = styled(ButtonPrimary)`

    outline: none;
    border: none;
    height: 30px;
    width: 100px;
    color: #131313;
    background-color: transparent;
    margin: 5px;
    font-weight: bold;
    &:hover{
        background-color: transparent;
       color: #1a1919;
    }
`
export const DivButton =styled.div`

    display: flex ;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    justify-self: flex-end;
    position: absolute;
    bottom: 5px;
    right: 5px;
`

 
export default function CardTrip (props){


    return <Card>
        <TitleTrip>{props.tripTitle}</TitleTrip>
        <PlanetName>{props.tripName}</PlanetName>
        
        
        <Description>{props.descriptionTrip}</Description>
       
        <DivButton>
            {localStorage.getItem('token') && <ButtonSecondary onClick={props.onClickInfo}>Trip Info</ButtonSecondary>}
        <ButtonPrimary onClick={props.goTripPage}>Apply</ButtonPrimary>
        </DivButton>
       
    </Card>
}