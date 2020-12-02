import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {UsernameDiv, Card, NameTitle, TextContainer, VotesContainer} from './stylesComponents'
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import axios from 'axios';
import { endPoints } from '../Constants/constants';
import CommentCard from './CommentCard'

export default function PostCard(props) {
  const [count, setCount] = useState(Number(props.votesCount))
  const history = useHistory()

  useEffect(() => {
   setCount(Number(props.votesCount))
  }, [props.votesCount])
  const addVote = (url)=>{
    setCount(count + 1)
    const body = {"direction": 1}
    axios.put(url, body, {headers:{
      Authorization: localStorage.getItem('token')
    }})
  }
  const removeVote = (url)=>{
    setCount(count - 1)
    const body = {"direction": -1}
    axios.put(url, body, {headers:{
      Authorization: localStorage.getItem('token')
    }}).catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <Card>
      <UsernameDiv>
        <NameTitle >@{props.username}</NameTitle>
        <VotesContainer>
          <ArrowUpwardSharpIcon onClick={()=>addVote(props.url)} color='secondary'/>
                <NameTitle>{count}</NameTitle>
          <ArrowDownwardSharpIcon onClick={()=>removeVote(props.url)}  color='secondary'/>
          </VotesContainer>
      </UsernameDiv>
      <TextContainer>
          <h2 onClick={()=>history.push(`/post/${props.id}`)}>{props.title}</h2>
          {props.text}
      </TextContainer>
      <CommentCard id={props.id} comments={props.comments} display={props.display}/>
      {props.children}
    </Card>
  );
}
