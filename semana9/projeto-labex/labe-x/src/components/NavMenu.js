import React from 'react';
import styled from 'styled-components'
import useInputCtrl from '../hooks/InputCtrl'
import logo from '../img/rocketLogo.png'
import { useHistory} from 'react-router-dom'



const NavBar = styled.nav`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 98%;
    height: 60px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 4;
    background-color: rgba(0,0,0, 0.4);
    @media screen and (max-width:800px){
        height: 120px;
        flex-flow: row wrap;
        justify-content: flex-end;
        padding: 10px;

    }
`
const SearchInput = styled.input`

    height: 30px;
    width: 300px;
    outline: none;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 20px;
    padding: 5px;
    background-color: transparent;
    color: white;
    @media screen and (max-width:800px){
        width: 300px;
        margin-left: 10px;
    }

`
const Logo = styled.img`
    width: 65px;
    height: 65px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 50%;
    cursor: pointer;

`
const ButtonNav  = styled.button`
     margin: 5px;
     height: 35px;
     width: 100px;
     border-radius: 5px;
     border: none;
     outline: none;
     cursor: pointer;
     background-color: rgba(255,255,255,0.5);
     &:hover{
        background-color: rgba(255,255,255,0.9) ;
     }

`
const ButtonLink  = styled.button`
     margin: 5px;
     height: 35px;
     width: 100px;
     background-color: transparent;
     text-transform: uppercase;
     border: none;
     outline: none;
     cursor: pointer;
     color: rgba(255,255,255,0.5);
     &:hover{
        color: rgba(255,255,255,0.9) ;
     }

`


export default function NavMenu (props){

    const [value, handleValue] = useInputCtrl()
    const history = useHistory()

    return <NavBar>
        <Logo onClick={()=>history.push('/')} src={logo} alt=""/>
        <div>
            <SearchInput placeholder='Search' value={value} onChange={handleValue} type='text'/>
        </div>
        <div>
            {props.seeTripsButton && <ButtonLink onClick={props.onSeeTrips} variant='text' color='default'>See Trips</ButtonLink> }
            {props.seeCreateButton && <ButtonLink onClick={props.onCreateTrips} variant='text' color='default'>Create Trip</ButtonLink> }
            <ButtonNav onClick={props.onLogin} variant='contained' color='default'>{props.loginButton}</ButtonNav>
        </div>
    </NavBar>

}

