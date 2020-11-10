import React, { useState } from 'react';
import styled from 'styled-components'
import broken from '../img/heart-broken.png'
import FavoriteIcon from '@material-ui/icons/Favorite';


export const MainDiv = styled.div`
    margin: auto;
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    flex-direction: column-reverse;
    height: 76%;
    width: 80%;
    justify-self: flex-end;
    overflow: hidden;
    position: relative;
    z-index: 10;
`
const Image = styled.img`
    height: 85%;
    width: 100%;
    border-radius: 10px;
`
const DivImageInfo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    @keyframes like {
        0% {opacity: 0%; right:0px;};
        100% {opacity: 100%; right: -600px;};
    }
    @keyframes deslike {
        0% {opacity: 0%; right:0px;};
        100% {opacity: 100%; right: 600px;};
    }
    animation: ${props=> props.animationName};
    animation-duration: 1s;
   
`
const Iconimg = styled.img`
    height: 40px;
    width: 40px;
`
const ButtonLikes = styled.button`
    width: 50%;
    border: none;
    outline: none;
    background-color: white;
    font-size: 45px;
    cursor: pointer;

`
const DivInfo = styled.div`
    position: absolute;
    width: 100%;
    bottom: 75px;
    right: 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(0,0,0,0.2);
    @media screen and (max-width:1000px){
        bottom: 85px;
    }
    
`

const NameTitle = styled.h3`
    color: white;
`
const Bio = styled.p`
    margin-left: 10px;
    color: white;
`






const FindMatch = (props)=>{
  
  
    return <MainDiv>
        <DivImageInfo 
        animationName={props.animationName}
        animationStart={props.animationStart}>
            <Image src={props.image}/>
            <DivInfo>
                <NameTitle>{props.name}, {props.age} Anos</NameTitle>
                <Bio>{props.bio}</Bio>
            </DivInfo>
        <ButtonLikes onClick={props.deslike}><Iconimg src={broken} alt=""/></ButtonLikes>
        <ButtonLikes onClick={props.like} ><FavoriteIcon fontSize='inherit' color='secondary'/></ButtonLikes>
        </DivImageInfo>
        
    </MainDiv>
}


export default FindMatch