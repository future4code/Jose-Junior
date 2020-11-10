import styled from 'styled-components'
import Button from '@material-ui/core/Button';


export const MainDiv = styled.div`
    margin: auto;
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    flex-direction: column-reverse;
    height: 76%;
    width: 80%;
    justify-self: flex-end;
    overflow: hidden;
    position: relative;
    z-index: 10;
`
export const Image = styled.img`
    height: 85%;
    width: 100%;
    border-radius: 10px;
`
export const DivImageInfo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    @keyframes like {
        0% {opacity: 0%; right:0px;};
        100% {opacity: 100%; right: -600px;};
    }
    @keyframes deslike {
        0% {opacity: 0%; right:0px;};
        100% {opacity: 100%; right: 600px;};
    }
    animation: ${props=> props.animationName};
    animation-duration: 1s ;
   
`
export const Iconimg = styled.img`
    height: 40px;
    width: 40px;
`
export const ButtonLikes = styled.button`
    width: 50%;
    border: none;
    outline: none;
    background-color: white;
    font-size: 45px;
    cursor: pointer;

`
export const DivInfo = styled.div`
    position: absolute;
    width: 100%;
    bottom: 75px;
    right: 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(0,0,0,0.2);
    @media screen and (max-width:1000px){
        bottom: 85px;
    }
    
`

export const NameTitle = styled.h3`
    color: white;
`
export const Bio = styled.p`
    margin-left: 10px;
    color: white;
`

export const SingleMatch = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 3px;
    width: 100%;
    height: 60px;
    z-index: 15;
    transition: 1s ease;
    &:hover{
        background-color: rgba(0,0,0,0.2);
    }
`

export const Img = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
`
export const Name = styled.h2`
    margin-left: 10px;
    font-family: 'Kaushan Script', cursive;
`
export const DivButton = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    align-self: flex-end;
`
export const CustomButton = styled(Button)`
    width: 100%;
    font-family: 'Kaushan Script', cursive;

`