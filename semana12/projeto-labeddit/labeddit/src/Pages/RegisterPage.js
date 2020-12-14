import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Login_RegisterContainer, 
        FormContainer, 
        InputContainer, 
        MyInput, 
        theme
        } from './stylesPage'
import axios from 'axios'
import {useForm} from '../Hooks/useFormCtrl'
import {endPoints} from '../Constants/constants'
import {ThemeProvider} from '@material-ui/styles'
import { ContextGlobal } from '../Global/Context/context';
import {Button} from '../Components/stylesComponents'

export default function RegisterPage() {

    const initForm = {username: '', email: '', password: ''}
    const [form, onChange] = useForm(initForm)

    const history = useHistory()

    const {setStates} = useContext(ContextGlobal)
    const handleChange = (event)=>{
        const {name, value} = event.target
        onChange(name, value)
    }

    const registeringUser = (event)=>{
        
        axios.post(endPoints.signUp, form).then(response=>{
          setStates.token(response.data.token)
          localStorage.setItem('token', response.data.token)
           setStates.user(response.data.user)
           localStorage.setItem('user', JSON.stringify(response.data.user))
        })
        history.push('/')
        event.preventDefault()
    }
  return (
    <Login_RegisterContainer>
      <ThemeProvider theme={theme}>
      <FormContainer onSubmit={registeringUser}>
      <h2>REGISTER</h2>
        <InputContainer>
            <AccountCircleRoundedIcon fontSize='large'/>
            <MyInput 
                name='email' 
                onChange={handleChange} 
                color='primary' 
                id="standard-basic" 
                type='email' 
                label="Email" 
                required/>
        </InputContainer>
        <InputContainer>
            <AccountCircleRoundedIcon fontSize='large'/>
            <MyInput
                name='username' 
                onChange={handleChange} 
                color='primary' 
                id="standard-basic" 
                type='text' 
                label="Username" 
                required/>
        </InputContainer>
        <InputContainer>
            <VisibilityOffIcon fontSize='large'/>
            <MyInput 
                name='password' 
                onChange={handleChange}
                color='primary' 
                id="standard-basic" 
                type='password' 
                label="Password" 
                required/>
        </InputContainer>
        <Button>Register</Button>
      </FormContainer>

      </ThemeProvider>
      <p>Already have an account?<b>Login</b></p>
    </Login_RegisterContainer>
  );
}
