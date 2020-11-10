import React, { useState , useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {MainDiv }from './FindMatch'
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {HeartDiv} from '../Screens/Home'

const MainDivMatches = styled(MainDiv)`
    flex-direction: column;
`

const SingleMatch = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 3px;
    width: 100%;
    height: 60px;
    z-index: 15;
    transition: 1s ease;
    &:hover{
        background-color: rgba(0,0,0,0.2);
    }
`
const Img = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 3px;
`
const Name = styled.h2`
    margin-left: 10px;
    font-family: 'Kaushan Script', cursive;
`
const DivButton = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    align-self: flex-end;
`
const CustomButton = styled(Button)`
    width: 100%;
    font-family: 'Kaushan Script', cursive;

`
const clearMatches = ()=>{
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junior/clear').then(response=>{

    }).catch(error=>{
        console.log(error.message)
    })
}


const Matches  =(props)=>{
    const [arrayMatches, setArrayMatches] = useState([])

    const getMatches = ()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junior/matches').then(response=>{
           
            setArrayMatches(response.data.matches)
        })
    }
    useEffect(()=>{
        getMatches()
    },[arrayMatches])



    return <MainDivMatches >
        {arrayMatches.length > 0? arrayMatches.map(profile=>{
            return <SingleMatch on>
                <Img src={profile.photo}/>
                 <Name>{profile.name}</Name>
            </SingleMatch>
        }): <HeartDiv>
             <FavoriteIcon fontSize='inherit' color='secondary'/>
            </HeartDiv>}
    {arrayMatches.length > 0 && <DivButton>
        <CustomButton onClick={clearMatches} color='secondary'  variant="contained">Limpar Matches</CustomButton>
    </DivButton>}
    </MainDivMatches>
}

export default Matches