import React, { useEffect, useState} from 'react';
import styled from 'styled-components'
import FindMatch from '../Components/FindMatch'
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import IsMatch from '../Components/IsMatch';
import Matches from '../Components/Matches';
import {MyTabs, MainDiv,TitleDiv,HalfDiv, HeartDiv} from './StyleHome'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 500,
    },
  });


export default function Home (props){

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [valorShow, setValorShow] = useState(false)
    const [animationName, setAnimationName] = useState('')
    const [valorShow2, setValorShow2] = useState(false)
    const [profile, setProfile] = useState([])
    const [ismatch, setIsMatch] = useState(false)
    const [matchPhoto, setMatchPhoto] = useState('')

    
    function handleChange(newValue) {
        setValue(newValue);
    }
    const show = ()=>{
        setValorShow(true)
        setValorShow2(false)
        setIsMatch(false)
    }
    const show2 = ()=>{
        setValorShow(false)
        setValorShow2(true)
        setIsMatch(false)
    }
   
    useEffect(()=>{
        getProfile()
    },[valorShow, ismatch])

    
    
    const getProfile = ()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junior/person'
        axios.get(url).then(response=>{
           
            const newProfile = [{
                id: response.data.profile.id,
                age: response.data.profile.age,
                name: response.data.profile.name,
                bio : response.data.profile.bio,
                photo : response.data.profile.photo
            }]
            
            setProfile(newProfile)
           setAnimationName('')
        }).catch(error=>{
            console.log(error.message)
        })
    }
    const like =(id, photo)=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junior/choose-person'
        const body = {
            id: id,
            choice: true
        }
        axios.post(url, body).then(response=>{
            if(response.data.isMatch){

                setIsMatch(true)
                setMatchPhoto(photo)
                setValorShow(false)
            }
        })

        setAnimationName('like')
        getProfile()
       
    }
    const deslike =()=>{

        setAnimationName('deslike')
        getProfile()
       
    }
                                                    
    return <MainDiv square className={classes.root}>
        <TitleDiv>
            <HalfDiv color='#f44336' bkColor='white' justify='flex-end'>
                <h3>ASTRO</h3>
            </HalfDiv>
            <HalfDiv color='grey' bkColor='white' justify='flex-start'>
                <h3>MATCH</h3>
            </HalfDiv>
        </TitleDiv>
      <MyTabs
        value={value}
        onChange={handleChange}
    
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        
        <Tab onClick={show} icon={<FavoriteIcon />} label="FIND A MATCH" />
        <Tab onClick={show2} icon={<PeopleAltIcon />} label="MATCHES" />
        
      </MyTabs>
        {valorShow &&  profile.map(profile=>{
        return <FindMatch
        animationName={animationName}
        //animationstart={animationStart}
        image={profile.photo}
        like={()=>like(profile.id, profile.photo)}
        deslike={deslike}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
        />})}
        {valorShow2 && <Matches/>}

      <HeartDiv>
        {ismatch? <IsMatch image={matchPhoto}/>: 
                    <FavoriteIcon fontSize='inherit' color='secondary'/>
            }
      </HeartDiv>


    </MainDiv>
}

