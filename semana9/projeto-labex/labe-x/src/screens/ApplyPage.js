import React from 'react';
import {MainDiv, VideoFrame, LogoName} from './HomeStyle'
import NavBar from '../components/NavMenu'
import { useHistory, useParams} from 'react-router-dom'
import launch from '../img/launch.mp4'
import { ThemeProvider } from '@material-ui/styles';
import {ButtonPrimary, ButtonSecondary, DivButton} from '../components/CardTrip'
import {theme, VideoDivLocal, LogoDivLocal, MyInput, DivForm, DivInput} from './ApplyStyles'
import useInputCtrl from '../hooks/InputCtrl'
import axios from 'axios'
import BaseLayout from '../components/BaseLayout'



export default function ApplyPage (props){



    const [name, changeName] = useInputCtrl('')
    const [age, changeAge] = useInputCtrl(0)
    const [profession, changeProfession] = useInputCtrl('')
    const [country, changeCountry] = useInputCtrl('')
    const [text, changeText] = useInputCtrl('')

    const pathParams = useParams()
    const history = useHistory()
    const id = pathParams.id

    const applying = ()=>{
        const body = {
            name: name,
            age: age,
            profession: profession,
            applicationText: text,
            country: country
        }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose/trips/${id}/apply`
        
        axios.post(url, body).then(response=>{
            alert(response.data.message)

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
                whiteLogo='Ready to'
                greyLogo=' launch'
                video={launch}
            >
            <ThemeProvider theme={theme}>
                <DivForm>
                    <DivInput width='100%'> 
                        <MyInput value={name} onChange={changeName}
                            width='90%' color='text.primary'label='Full Name' variant="filled" />
                    </DivInput>
                    <DivInput width='100%'>
                        <DivInput width='20%'>
                            <MyInput value={age} onChange={changeAge}
                                width= '98%' type='number' min='18' label="Age" variant="filled" />
                        </DivInput>
                        <DivInput width='35%'>   
                            <MyInput  value={country} onChange={changeCountry}
                                width='98%' label="Country" variant="filled" />
                        </DivInput>
                        <DivInput width='35%'>
                            <MyInput value={profession} onChange={changeProfession} 
                                width='98%' label="Profession" variant="filled" />
                        </DivInput>                       
                    </DivInput>
                    <DivInput width='100%'>
                        <MyInput value={text} onChange={changeText}
                            width='90%' label="Why Choose you:" variant="filled" />
                    </DivInput>
                    <DivButton>
                        <ButtonSecondary onClick={()=> history.goBack()}>Back</ButtonSecondary>
                        <ButtonPrimary onClick={applying}>Apply</ButtonPrimary>
                    </DivButton>
                </DivForm>
                </ThemeProvider>        
    </BaseLayout>
}