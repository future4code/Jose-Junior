import React, { useState } from 'react';
import broken from '../img/heart-broken.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {MainDiv, Image, DivImageInfo,Iconimg, ButtonLikes, DivInfo, NameTitle, Bio} from './StyleFindMatch'



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