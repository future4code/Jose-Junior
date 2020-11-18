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
    

    const logging = ()=>{
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
                    <DivInput width='100%'> 
                        <MyInput value={email} onChange={changeEmail}
                            width='90%' color='text.primary'label='E-mail' variant="filled" />
                    </DivInput>
                    
                    <DivInput width='100%'>
                        <MyInput type='password'value={password} onChange={changePassowrd}
                            width='90%' label="Password" variant="filled" />
                    </DivInput>
                    <DivButton>
                        <ButtonSecondary onClick={()=> history.goBack()}>Back</ButtonSecondary>
                        <ButtonPrimary onClick={logging}>Login</ButtonPrimary>
                    </DivButton>
                </DivForm>
            </ThemeProvider>   
            </BaseLayout>     
    

}