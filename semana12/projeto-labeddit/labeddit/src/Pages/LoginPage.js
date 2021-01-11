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
import {endPoints} from '../Constants/constants'
import {useForm} from '../Hooks/useFormCtrl'
import {ThemeProvider} from '@material-ui/styles'
import { ContextGlobal } from '../Global/Context/context';
import {Button} from '../Components/stylesComponents'
export default function LoginPage() {

  const initForm = {email: '', password: ''}
  const [form, onChange] = useForm(initForm)

  const history = useHistory()

  const {setStates} = useContext(ContextGlobal)

  const handleChange = (event)=>{
      const {name, value} = event.target
      onChange(name, value)
  }

  const requestLogin = (event)=>{

    axios.post(endPoints.login, form).then(response=>{
      setStates.token(response.data.token)
     localStorage.setItem('token', response.data.token)
      setStates.user(response.data.user)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    
    })
    
    event.preventDefault()
    setTimeout(()=>{
      
      history.push('/')
    }, 1000)
  }
  return (
    <Login_RegisterContainer>
      <ThemeProvider theme={theme}>
      <FormContainer onSubmit={requestLogin}>
        <h2>LOGIN</h2>
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
          <VisibilityOffIcon fontSize='large'/>
          <MyInput 
            name='password' 
            onChange={handleChange}
            color='primary' 
            id="standard-basic" 
            type='password' 
            label="Password" 
            required/></InputContainer>
      <Button>login</Button>
      </FormContainer>
      </ThemeProvider>
      <p>Don`t have an account?<b> Register</b></p>
    </Login_RegisterContainer>
  );
}
