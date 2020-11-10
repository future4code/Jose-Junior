import React from 'react';
import styled from 'styled-components'


const MainDiv = styled.div`
     position: relative;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 15;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`
const DivImage = styled.div`
   
    height: 50%;
    width: 50%;
    border-radius: 50%;
    border: 4px solid white;
    overflow: hidden;
    box-shadow: 0px 20px 20px rgba(0,0,0,0.2);

`
const MatchTitle = styled.h1`
    color: #f44336;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    position: absolute;
    top: 10%;
    right: 20%;
    text-shadow: 0px 5px black;
`


const IsMatch = (props)=>{


    return <MainDiv>
        <DivImage>
            <MatchTitle>Its a Match!</MatchTitle>
            <Image src={props.image}/>
        </DivImage>
    </MainDiv>
}

export default IsMatch