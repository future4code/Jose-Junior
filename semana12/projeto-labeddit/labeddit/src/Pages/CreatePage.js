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
import {Button} from '../Components/stylesComponents'
import useAuthorization from '../Hooks/useAuthorization';


export default function CreatePage() {

  useAuthorization()
  
  const initForm = {title: '', text: ''}
  const [form, onChange] = useForm(initForm)

  const history = useHistory()

  

  const handleChange = (event)=>{
      const {name, value} = event.target
      onChange(name, value)
  }

  const createPost = (event)=>{

    axios.post(endPoints.createPost, form, {headers:{
        Authorization : localStorage.getItem('token')
    }}).then(response=>{
      console.log(response.data)
    })
    
    event.preventDefault()
    setTimeout(()=>{
      
      history.push('/')
    }, 1000)
  }
  return (
    <Login_RegisterContainer>
      <ThemeProvider theme={theme}>
      <FormContainer onSubmit={createPost}>
        <h2>New Post</h2>
        <InputContainer>
         
          <MyInput
            name='title' 
            onChange={handleChange}
            color='primary' 
            id="standard-basic" 
            type='text' 
            label="Title" 
            required/>
        </InputContainer>
        <InputContainer>
          
          <MyInput 
            name='text' 
            onChange={handleChange}
            color='primary' 
            id="standard-basic" 
            type='text' 
            label="Text" 
            required/></InputContainer>
      <Button>Post it</Button>
      </FormContainer>
      </ThemeProvider>
      
      
    </Login_RegisterContainer>
  );
}