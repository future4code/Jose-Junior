import React from 'react';
import { useHistory} from 'react-router-dom'
import admin from '../img/admin.jpg'
import { ThemeProvider } from '@material-ui/styles';
import {ButtonPrimary, ButtonSecondary, DivButton} from '../components/CardTrip'
import {theme, MyInput, DivForm, DivInput} from './ApplyStyles'
import useInputCtrl from '../hooks/InputCtrl'
import axios from 'axios'
import BaseLayout from '../components/BaseLayout'




export default function LoginPage (props){



    const [email, changeEmail] = useInputCtrl('')
    const [password, changePassowrd] = useInputCtrl('')
    

   
    const history = useHistory()
    

    const logging = (event)=>{
        const body = {
            password: password,
            email: email,
            
        }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/login`
        
        axios.post(url, body).then(response=>{
            localStorage.setItem('token', response.data.token)
            history.push('/')
        }).catch(error=>{
            console.log(error)
        })

        event.preventDefault()
    }


    
    return <BaseLayout
                isHomePage={true}
                seeTripsButton={()=> history.push('/')}
                onLoginClick={()=> history.push('/login')}
                loginText={localStorage.getItem('token')? 'Log-out':'Admin Access'}
                whiteLogo='Admin'
                greyLogo=' Login'
                image={admin}
            >
            <ThemeProvider theme={theme}>
                <DivForm>
                    <form onSubmit={logging}>
                    <DivInput width='100%'> 
                        <MyInput value={email} onChange={changeEmail}
                            width='90%' color='text.primary'label='E-mail' type='email' variant="filled" required/>
                    </DivInput>
                    
                    <DivInput width='100%'>
                        <MyInput type='password'value={password} onChange={changePassowrd}
                            width='90%' label="Password" variant="filled" required/>
                    </DivInput>
                    <DivButton>
                        <ButtonSecondary type='button'onClick={()=> history.goBack()}>Back</ButtonSecondary>
                        <ButtonPrimary >Login</ButtonPrimary>
                    </DivButton>
                  </form>
                </DivForm>
            </ThemeProvider>   
            </BaseLayout>     
    

}