import {ContextGlobal} from './Context/context'
import React, {useState, useEffect} from 'react';
import {endPoints} from '../Constants/constants'
import axios from 'axios';

export default function GlobalState(props) {

  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [posts, setPosts] = useState([])
  const [ data, setData] = useState([])

  useEffect(()=>{
    axios.get(endPoints.getPosts, {headers:{Authorization: localStorage.getItem('token')}}).then(response=>{
      setPosts(response.data.posts)
      setData(response.data.posts)
      console.log(response.data.posts)
    }).catch(error=>{
      console.log(error.message)
    })
    
  },[token])

  const information = {
    states: {token: token, user: user},
    setStates: {token: setToken, user: setUser, post: setPosts },
    data: data,
    posts: posts
  }
  return (
    <ContextGlobal.Provider value={information}>
        {props.children}
    </ContextGlobal.Provider>
  );
}
