import styled from 'styled-components'
import {primaryColor} from '../Constants/constants'
const {main, light, dark } = primaryColor

export const NavBar = styled.nav`

    display: flex;
    position: fixed;
    top: 0px;
    left:0px;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    max-height: fit-content;
    width: 100%;
    background-color: ${main};
    color: white;
    box-shadow: 5px 5px 0px black;
    margin: auto;
    font-family: 'Orbitron', sans-serif;
    border-radius: 3px;
    padding: 5px 0px;
    z-index: 5;
    flex-flow: row wrap;
    @media screen and (max-width: 700px){
      justify-content: center;
      width: 100vw;
      margin: none;
 }
`
export const DivContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 40px;
  margin:0px 20px;
 @media screen and (max-width: 700px){
   width: 200px;
 }
 @media screen and (max-width: 500px){
    width: 400px;
    
  }
`
export const Button = styled.button`

  border: none;
  outline: none;
  background-color: black;
  color: white;
  box-shadow: 3px 3px 0px ${light} ;
  font-family: 'Orbitron', sans-serif; 
  height: 30px;
  margin: 5px;
  min-width: 100px;
  max-width: max-content;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 2px;
  cursor: pointer;
&:hover{
  background-color: #242323;
}
&:focus{
  background-color: #242323;
}
`
export const SearchInput = styled.input`

  outline: none;
  border: none;
  height: 25px;
  width: 90%;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px; 
`
export const CommentInput = styled.textarea`
    outline: none;
    border: none;
    height: 60px;
    margin: auto;
    width: 90%;
    padding: 5px;
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
   
`
export const CommentContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -50px;

`
export const ButtonContainer= styled.div`
   display: ${props=>props.display? 'flex': 'none'};
  align-items: center;
  justify-content: flex-end;
  height: 30px;
  width: 100%;
`
export const CommentButton = styled.button`
    outline: none;
    border: none;
    height: 30px;
    width: 30px;
    font-size: 30px;
    padding: 0px;
    margin: 5px;
    background-color: transparent;
    cursor: pointer;
`
export const Logo = styled.div`

  height: 40px;
  width: 200px;
  background-color: black;
  color: white;
  box-shadow: 3px 3px 0px ${light} ;
  font-family: 'Orbitron', sans-serif; 
  border-radius: 3px;
  font-size: 30px;

  cursor: pointer;
  @media screen and (max-width: 500px){
    width: 350px;
    
  }
 

`
export const Card = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100px;
  max-height: max-content;
  width: 600px;
  border-radius: 3px;
  box-shadow: 3px 3px 0px black ;
  background-color: whitesmoke;
  margin-bottom: 10px;
 overflow: hidden;
 overflow-y: scroll;
 ::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background: ${light};
  
}
  @media screen and (max-width: 700px){
    width: 100vw;
    
  }
`
export const UsernameDiv = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px 0px ${light} ;

`
export const NameTitle = styled.h2`

  font-family: 'Orbitron', sans-serif;
  color: white;
  margin-left: 10px;
  letter-spacing: 2px;
  font-weight: lighter;
  font-size: 20px;
  @media screen and (max-width: 700px){
   font-size: 15px;
    
  }

`
export const TextContainer = styled.div`

  margin: auto;
  margin-top: -20px;
  font-family: 'Orbitron', sans-serif;
  padding: 20px;
  width: 80%;
  

`
export const VotesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
