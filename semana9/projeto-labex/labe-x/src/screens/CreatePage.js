import React from 'react';
import { useHistory} from 'react-router-dom'
import launch from '../img/launch.mp4'
import { ThemeProvider } from '@material-ui/styles';
import {ButtonPrimary, ButtonSecondary, DivButton} from '../components/CardTrip'
import {theme, MyInput, DivForm, DivInput} from './ApplyStyles'
import {useForm} from '../hooks/FormCtrl'
import axios from 'axios'
import BaseLayout from '../components/BaseLayout'
import useAuthorization from '../hooks/Authorization';



export default function CreatePage (props){

    
    useAuthorization()

    const initForm = {name: '', durationInDays: 0, description: '', planet:'', date: ''}

    const [form, onChange] = useForm(initForm)

    const handleInput = (event)=>{

        const {name, value}= event.target

        onChange(name, value)
    }

    
    const history = useHistory()
    

    const applying = (event)=>{
        const body = form
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trips`
        
        axios.post(url, body, {headers:{
            auth: localStorage.getItem('token')
        }}).then(response=>{
            alert('Trip Created!')

            history.push('/')
        }).catch(error=>{
            console.log(error)
        })

        event.preventDefault()

       
    }

    const logout = ()=>{
        localStorage.removeItem('token')
       
        history.push('/')

    }


    
    return <BaseLayout
                isHomePage={true}
                seeTripsButton={()=> history.push('/')}
                onLoginClick={localStorage.getItem('token')?logout:()=> history.push('/login')}
                loginText={localStorage.getItem('token')? 'Log-out':'Admin Access'}
                whiteLogo='Create'
                greyLogo=' New Trip'
                video={launch}
            >
            <ThemeProvider theme={theme}>
                <DivForm>
                    <form onSubmit={applying}>
                    <DivInput width='100%'> 
                        <MyInput name='name' value={form.name} onChange={handleInput}
                            width='90%' color='text.primary'label='Full Name' variant="filled" />
                    </DivInput>
                    
                    <DivInput width='100%'>
                        <DivInput width='20%'>
                            <MyInput name='planet' value={form.planet} onChange={handleInput}
                                width= '98%' type='text'  label="Planet" variant="filled" required/>
                        </DivInput>
                        <DivInput width='35%'>   
                            <MyInput  name='date' value={form.date} onChange={handleInput}
                                width='98%' label="Date" type='date' variant="filled" required/>
                        </DivInput>
                        <DivInput width='35%'>
                            <MyInput name='durationInDays' value={form.durationInDays} onChange={handleInput} 
                                width='98%' label="Duration Days" type='number' variant="filled" required />
                        </DivInput>                       
                    </DivInput>
                    <DivInput width='100%'>
                        <MyInput name='description' value={form.description} onChange={handleInput}
                            width='90%' label="Description" variant="filled" required/>
                    </DivInput>
                    <DivButton>
                        <ButtonSecondary type='button' onClick={()=> history.goBack()}>Back</ButtonSecondary>
                        <ButtonPrimary >Apply</ButtonPrimary>
                    </DivButton>

                    </form>
                </DivForm>
                </ThemeProvider>        
    </BaseLayout>
}