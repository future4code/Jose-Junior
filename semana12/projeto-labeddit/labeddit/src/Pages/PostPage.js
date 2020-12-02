import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import { ContextGlobal } from '../Global/Context/context';
import PostCard from '../Components/PostCard'
import {Login_RegisterContainer} from './stylesPage'
import axios from 'axios'
import { endPoints } from '../Constants/constants';

export default function PostPage() {
  const pathParams = useParams()
  const [post, setPost] = useState('')
  
  useEffect(()=>{

    axios.get(`${endPoints.getPosts}/${pathParams.idPost}`, {headers:{
      Authorization: localStorage.getItem('token')
    }}).then(response=>{
      setPost(response.data.post)
     
    })
  }, [])

  return (
   <Login_RegisterContainer>
     <PostCard 
          username={post.username}
          title={post.title}
          text={post.text}
          votesCount={post.votesCount}
          id={post.id}
          display={true}
        >
          </PostCard> 
        {post && post.comments.map(comment=>{
          return <PostCard 
          username={'Comment by '+ '@'+comment.username}
      
          text={comment.text}
          votesCount={post.votesCount}
          id={post.id}
          url={`${endPoints.base_url}/${pathParams.idPost}/comment/${comment.id}/vote`}
          display={false}
        /> 
        })}
   </Login_RegisterContainer>

  );
}
