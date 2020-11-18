import React, {useState, useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom'
import admin from '../img/adminArea.jpg'
import { ThemeProvider } from '@material-ui/styles';
import {ButtonPrimary, ButtonSecondary, DivButton} from '../components/CardTrip'
import {theme, DivForm} from './ApplyStyles'
import useInputCtrl from '../hooks/InputCtrl'
import axios from 'axios'
import BaseLayout from '../components/BaseLayout'
import useAuthorization from '../hooks/Authorization';
import useRequestProtectedData from '../hooks/RequestProtectedData';




export default function TripInfo (props){
    const pathParams= useParams()
    const history = useHistory()
    const id = pathParams.id
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trip/${id}`
    
    
    useAuthorization()

    const data = useRequestProtectedData(url, localStorage.getItem('token'), undefined)
    console.log(data)
    


    
    return <BaseLayout
                isHomePage={true}
                seeTripsButton={()=> history.push('/')}
                onLoginClick={()=> history.push('/login')}
                loginText={localStorage.getItem('token')? 'Log-out':'Admin Access'}
                whiteLogo='Trip '
                greyLogo=' Information'
                image={admin}
            >
            <ThemeProvider theme={theme}>
                <DivForm>
                    {data&&
                    <div>

                        <h1>{data.trip.name}</h1>
                        <h2>{data.trip.planet}</h2>
                        <p><b>Date: </b>{data.trip.date}</p>
                    <p><b>Duration: </b>{data.trip.durationInDays} days</p>
                    <p><b>Descrition:</b></p>
                    <p>{data.trip.description}</p>
                    <h3>Candidates:</h3>
                    {data.trip.candidates && data.trip.candidates.map(candidate=>{
                        return <div key={candidate.id}>
                            <p><b>Name: </b> {candidate.name}</p>
                            <p><b>Age: </b> {candidate.age}</p>
                            <p><b>Profession: </b> {candidate.profession}</p>
                            <ButtonPrimary>Approve</ButtonPrimary>
                        </div>
                    })}
                    </div>
                    }
                </DivForm>
            </ThemeProvider>   
            </BaseLayout>     
    

}