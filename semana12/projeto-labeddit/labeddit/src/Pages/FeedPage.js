import React, {useContext, useEffect, useState} from 'react';
import useAuthorization from '../Hooks/useAuthorization'
import {WaitPostDiv, Login_RegisterContainer, PostsDiv} from './stylesPage'
import PostCard from '../Components/PostCard'
import { ContextGlobal } from '../Global/Context/context';
import { endPoints } from '../Constants/constants';

export default function FeedPage() {
  useAuthorization()

  const {data, posts} = useContext(ContextGlobal)
  const [post, setPosts]= useState([])

  useEffect(() => {
    const orderedData = data.sort((a, b )=> b.votesCount - a.votesCount)
    setPosts(orderedData)
  }, [data])

  return (
   <Login_RegisterContainer>
       <WaitPostDiv>
          <PostCard 
            username='username'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            votesCount='0'
            title='Lorem Ipsum'
          />
          <PostCard 
            username='username'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            votesCount='0'
            title='Lorem Ipsum'
          />
           <PostCard 
            username='username'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            votesCount='0'
            title='Lorem Ipsum'
          />
          <PostCard 
            username='username'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            votesCount='0'
            title='Lorem Ipsum'
          />
       </WaitPostDiv>
     
         
     {posts && <PostsDiv>
       
      {post.map((post, idx)=>{
        
        return <PostCard key={idx}
          username={post.username}
          title={post.title}
          text={post.text}
          votesCount={post.votesCount}
          id={post.id}
          url={`${endPoints.base_url}/${post.id}/vote`}
          display={true}
          comments={post.commentsCount}
        /> 
      })}
       </PostsDiv>}
   </Login_RegisterContainer>
  );
}
