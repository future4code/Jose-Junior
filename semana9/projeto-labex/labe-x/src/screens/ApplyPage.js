import React from 'react';
import { useHistory, useParams} from 'react-router-dom'
import launch from '../img/launch.mp4'
import { ThemeProvider } from '@material-ui/styles';
import {ButtonPrimary, ButtonSecondary, DivButton} from '../components/CardTrip'
import {theme, MyInput, DivForm, DivInput} from './ApplyStyles'
import {useForm} from '../hooks/FormCtrl'
import axios from 'axios'
import BaseLayout from '../components/BaseLayout'



export default function ApplyPage (props){


    const initForm = {name: '', age: 0, country: '', profession:'', applicationText: ''}

    const [form, onChange] = useForm(initForm)

    const handleInput = (event)=>{

        const {name, value}= event.target

        onChange(name, value)
    }

    const pathParams = useParams()
    const history = useHistory()
    const id = pathParams.id

    const applying = (event)=>{
        const body = form
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trips/${id}/apply`
        
        axios.post(url, body).then(response=>{
            alert(response.data.message)

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
                seeCreateButton={localStorage.getItem('token')? true: false}
                onCreateTrips={()=>history.push('/create')}
                onLoginClick={localStorage.getItem('token')?logout:()=> history.push('/login')}
                loginText={localStorage.getItem('token')? 'Log-out':'Admin Access'}
                whiteLogo='Ready to'
                greyLogo=' launch'
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
                            <MyInput name='age' value={form.age} onChange={handleInput}
                                width= '98%' type='number' min='18' label="Age" variant="filled" required/>
                        </DivInput>
                        <DivInput width='35%'>   
                            <MyInput  name='country' value={form.country} onChange={handleInput}
                                width='98%' label="Country" variant="filled" required/>
                        </DivInput>
                        <DivInput width='35%'>
                            <MyInput name='profession' value={form.profession} onChange={handleInput} 
                                width='98%' label="Profession" variant="filled" required />
                        </DivInput>                       
                    </DivInput>
                    <DivInput width='100%'>
                        <MyInput name='applicationText' value={form.applicationText} onChange={handleInput}
                            width='90%' label="Why Choose you:" variant="filled" required/>
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