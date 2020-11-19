import React ,{useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom'
import NavBar from '../components/NavMenu'
import videoFrame from '../img/VideoFrame.mp4'
import CardTrip from '../components/CardTrip'
import useRequestData from '../hooks/RequestData'
import {MainDiv, VideoDiv, VideoFrame,TripsDiv,LogoDiv, LogoName} from './HomeStyle'
import useInputCtrl from '../hooks/InputCtrl'









export default function HomePage (props){

    const [value, handleValue] = useInputCtrl()
   

    
    const history = useHistory()
    const logout = ()=>{
        localStorage.removeItem('token')
        
        history.push('/')

    }
    const goTripApply =(id)=>{
        history.push(`/apply_form/${id}`)
    }

    const goTripInfo =(id)=>{
        history.push(`/trip_info/${id}`)
    }

    const data = useRequestData(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trips',
         undefined)

    

    
  
    return <MainDiv>
            <NavBar
            value={value}
            handleValue={handleValue}
            seeCreateButton={localStorage.getItem('token')? true: false}
            onCreateTrips={()=>history.push('/create')}
            seeTripsButton={false}
            onLogin={localStorage.getItem('token')?logout:()=> history.push('/login')}
            loginButton={localStorage.getItem('token')? 'Log-out':'Admin Access'}
            ></NavBar>
            <VideoDiv>
                <LogoDiv>
                        <LogoName color='white'>Labe-X:</LogoName>
                        <LogoName color='grey'>Beyond</LogoName>
                </LogoDiv>
                <VideoFrame loop autoPlay muted>
                    <source src={videoFrame}/> 
                </VideoFrame>
            </VideoDiv>
            <TripsDiv>
                {data && data.trips.map(trip=>{
                    return <CardTrip key={trip.id}
                    onClickInfo={()=>goTripInfo(trip.id)}
                    goTripPage={()=>goTripApply(trip.id)}
                    tripTitle={trip.name}
                    descriptionTrip={trip.description}
                    tripName={trip.planet}/>
                })}
            </TripsDiv>
           
    </MainDiv>
}