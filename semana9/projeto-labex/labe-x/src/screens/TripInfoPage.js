import React, {useState, useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom'
import admin from '../img/adminArea.jpg'
import { ThemeProvider } from '@material-ui/styles';
import {ButtonPrimary, DivButton} from '../components/CardTrip'
import {theme, DivForm} from './ApplyStyles'
import axios from 'axios'
import BaseLayout from '../components/BaseLayout'
import useAuthorization from '../hooks/Authorization';
import useRequestProtectedData from '../hooks/RequestProtectedData';
import styled from 'styled-components'

const DivInformation = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin:auto;
    position: relative;
    max-width: 400px;

`
const DivCandidate = styled(DivInformation)`

    border-radius: 5px;
    width: 100%;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 5px;
`





export default function TripInfo (props){
    const pathParams= useParams()
    const history = useHistory()
    const id = pathParams.id
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trip/${id}`
    
    
    useAuthorization()

    const data = useRequestProtectedData(url, localStorage.getItem('token'), undefined)
    console.log(data)

    const approveCand = (candidateId, tripId)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trips/${tripId}/candidates/${candidateId}/decide`
        const body = {
            approve: true
        }
        axios.put(url, body, {headers:{
            auth: localStorage.getItem('token')
        }})
        history.push(`/`)
    }
    const logout = ()=>{
        localStorage.removeItem('token')
        console.log('logout')
        history.push('/')

    }

    


    
    return <BaseLayout
                isHomePage={true}
                seeTripsButton={()=> history.push('/')}
                seeCreateButton={localStorage.getItem('token')? true: false}
                onCreateTrips={()=>history.push('/create')}
                onLoginClick={localStorage.getItem('token')?logout:()=> history.push('/login')}
                loginText={localStorage.getItem('token')? 'Log-out':'Admin Access'}
                whiteLogo='Trip '
                greyLogo=' Information'
                image={admin}
            >
            <ThemeProvider theme={theme}>
                <DivForm>
                    {data&&
                    <DivInformation>

                        <h1>{data.trip.name}</h1>
                        <h2>{data.trip.planet}</h2>
                        <p><b>Date: </b>{data.trip.date}</p>
                    <p><b>Duration: </b>{data.trip.durationInDays} days</p>
                    <p><b>Descrition:</b></p>
                    <p>{data.trip.description}</p>
                    <h3>Candidates:</h3>
                    {data.trip.candidates && data.trip.candidates.map(candidate=>{
                        return <DivCandidate key={candidate.id}>
                            <p><b>Name: </b> {candidate.name}</p>
                            <p><b>Age: </b> {candidate.age}</p>
                            <p><b>Profession: </b> {candidate.profession}</p>
                            <DivButton>
                            <ButtonPrimary onClick={()=> approveCand(candidate.id, data.trip.id)}>Approve</ButtonPrimary>
                            </DivButton>
                        </DivCandidate>
                    })}
                    <h3>Tripulants:</h3>
                    {data.trip.approved && data.trip.approved.map(candidate=>{
                        return <DivCandidate key={candidate.id}>
                            <p><b>Name: </b> {candidate.name}</p>
                            <p><b>Age: </b> {candidate.age}</p>
                            <p><b>Profession: </b> {candidate.profession}</p>
                            <DivButton>
                            <h3>Approved</h3>
                            </DivButton>
                        </DivCandidate>
                    })}
                    </DivInformation>
                    }
                </DivForm>
            </ThemeProvider>   
            </BaseLayout>     
    

}