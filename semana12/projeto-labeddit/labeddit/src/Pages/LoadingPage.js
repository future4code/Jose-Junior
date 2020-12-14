import React, {useContext, useEffect}from 'react';
import {useHistory} from 'react-router-dom'
import {LoadingContainer, LoadingTag} from './stylesPage'
import loading from '../img/loading.gif'
import { ContextGlobal } from '../Global/Context/context';
export default function LoadingPage() {

  const history = useHistory()
  const {states} = useContext(ContextGlobal)
  useEffect(()=>{

    const token = states.token

    setTimeout(()=>{
      
      token ? history.push('/feed') : history.push('/login')
    }, 3000)

}, [history, states.token])


  return (
    <LoadingContainer>
      <img src={loading} />
      <LoadingTag>Loading...</LoadingTag>
    </LoadingContainer>
  );
}
