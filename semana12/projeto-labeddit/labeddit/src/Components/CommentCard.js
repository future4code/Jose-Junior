import React, {useState} from 'react';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {
    CommentButton, 
    CommentContainer,  
    ButtonContainer, 
    CommentInput} from './stylesComponents'
import { endPoints } from '../Constants/constants';
import {useForm} from '../Hooks/useFormCtrl'
import axios from 'axios'

export default function CommentCard(props) {
    const [display, setDisplay] = useState(false)
    const initState = {text: ''}
    const [form, onChange] = useForm(initState)

    const handleChange = (event)=>{
        const {name, value} = event.target
        onChange(name, value)
        
    }

    const sendComment = ()=>{
        const body = {'text': form.text}
    axios.post(`${endPoints.base_url}/${props.id}/comment`, body, {headers:{
      Authorization: localStorage.getItem('token')
    }}).then(response=>{
        console.log(response.data)
    })
    }
    
  return (
    <CommentContainer>
        <ButtonContainer display={props.display}>
        {props.comments} <CommentButton onClick={()=> setDisplay(!display)}><CommentRoundedIcon fontSize='inherit'/></CommentButton>
        </ButtonContainer>
        
        <ButtonContainer display={display}>
            <CommentInput name='text'  onChange={handleChange} placeholder='what are you thinking...'/>
            <CommentButton onClick={sendComment}>
               <SendRoundedIcon/>
            </CommentButton>
        </ButtonContainer>
    </CommentContainer>
  );
}
