import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs';

export const MyTabs = styled(Tabs)`
    max-width: 100%;
`

export const MainDiv = styled.div`

    position: relative;
    width: 35vw;
    height: 80vh;
    margin: auto;
    margin-top: 60px;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0px 20px 20px rgba(0,0,0,0.2), 20px 20px 30px rgba(0,0,0,0.2);
    @media screen and (max-width: 1200px){
        height: 90vh;
        width: 70vw;
        border-radius: 10px;
       
    }
    @media screen and (max-width: 500px){
        height: 100vh;
        width: 100vw;
        border-radius: 10px;
        margin-top: 0px;
        box-shadow: none;
    }
`

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
`
export const HalfDiv = styled.div`
    width: 50%;
    color: ${props => props.color};
    background-color: ${props => props.bkColor};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    padding: 3px;
    font-family: 'Kaushan Script', cursive;
    
`
export const HeartDiv = styled.div`

    width: 100%;
    height: 80%;
    z-index: 1;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes heart {
        0% {font-size: 30px;}
        25% {font-size: 40px;}
        50% {font-size: 60px;}
        75% {font-size: 75px;}
        100% {font-size: 90px;}
    }
    animation: heart;
    animation-duration: 2s;
    animation-iteration-count: infinite;

`