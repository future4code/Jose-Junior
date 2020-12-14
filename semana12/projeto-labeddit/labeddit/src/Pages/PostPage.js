import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import PostCard from '../Components/PostCard'
import {Login_RegisterContainer} from './stylesPage'
import axios from 'axios'
import { endPoints } from '../Constants/constants';
import useAuthorization from '../Hooks/useAuthorization';

export default function PostPage() {
  useAuthorization()
  const pathParams = useParams()
  const [post, setPost] = useState('')
  
  useEffect(()=>{

    axios.get(`${endPoints.getPosts}/${pathParams.idPost}`, {headers:{
      Authorization: localStorage.getItem('token')
    }}).then(response=>{
      setPost(response.data.post)
     
    })
  }, [pathParams.idPost])

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
          votesCount={comment.votesCount}
          id={comment.id}
          url={`${endPoints.base_url}/${pathParams.idPost}/comment/${comment.id}/vote`}
          display={false}
        /> 
        })}
   </Login_RegisterContainer>

  );
}
