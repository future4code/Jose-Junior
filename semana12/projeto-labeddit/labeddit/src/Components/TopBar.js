import React ,{useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {useForm} from '../Hooks/useFormCtrl'
import {NavBar, DivContainer, Button, SearchInput, Logo} from './stylesComponents'
import PageviewIcon from '@material-ui/icons/Pageview';
import { ContextGlobal } from '../Global/Context/context';


export default function TopBar(props) {
  const history = useHistory()
  const {states, setStates, data, posts} = useContext(ContextGlobal)
  const initForm = {search: ''}
  const [form, onChange]= useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target
    onChange(name,value)
  }

  return (
    <NavBar>
      <DivContainer>
        <Logo onClick={()=>history.push('/')}>LabEddit</Logo>
      </DivContainer>
      <DivContainer>
        <PageviewIcon fontSize='inherit'/>
        <SearchInput placeholder='Search' name='search' onChange={handleChange} type="text"/>
        </DivContainer>
      <DivContainer>
  {states.token? <Button>user: {states.user&&states.user.username}</Button>:<Button onClick={()=>history.push('/login')}>Login</Button>}
      {!states.token && <Button onClick={()=>history.push('/register')}>Register</Button>}
      {states.token && <Button onClick={()=>{
        setStates.token('') 
        localStorage.removeItem('token')
        setStates.user({})
        localStorage.removeItem('user')
        history.push('/')}}>Logout</Button>}

      </DivContainer>
    </NavBar>
  );
}
