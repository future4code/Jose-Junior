import React, { useState , useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {MainDiv, SingleMatch, Img, Name, DivButton, CustomButton }from './StyleFindMatch'

import FavoriteIcon from '@material-ui/icons/Favorite';
import {HeartDiv} from '../Screens/StyleHome'

const MainDivMatches = styled(MainDiv)`
    flex-direction: column;
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