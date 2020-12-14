import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import PostCard from '../Components/PostCard'
import {primaryColor} from '../Constants/constants'
import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#fff',
      }
    },
  });
const {main, light, dark } = primaryColor

export const WaitPostDiv= styled.div`

  width: max-content;
  height: max-content;
  opacity: 10%;
  filter: grayscale(90);
  z-index: 1;
  animation-name: loading;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  position: absolute;
  top: 10px;
  
  
}
@keyframes loading {
 0% { opacity: 10%; filter:grayscale(90) }
 40% {opacity: 25%; filter:grayscale(80)  }
 70% { opacity: 30%; filter:grayscale(75) }
 90% { opacity: 25%; filter:grayscale(80) }
 100% { opacity: 15%; filter:grayscale(85)  }
}
@media screen and (max-width: 700px){
    left:-20px;
    
  }
`
export const PostsDiv = styled.div`

display: flex;
flex-direction: column;
width: max-content;
height: max-content;
z-index: 3;
background-color: rgb(68, 67, 67);
position: absolute;
top: 10px;
@media screen and (max-width: 700px){
    left:-20px;
    
  }

`
export const Login_RegisterContainer = styled.div`

    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 90vw;
    margin: auto;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 700px){
      margin-top: 130px;
    
  }
   

`
export const FormContainer = styled.form`

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-top: 100px;
      margin: 10px;
      padding:10px ;
      min-height: 300px;
      width: 500px;
      background-color: ${light};
      box-shadow: 5px 5px 0px black ;
      font-family: 'Orbitron', sans-serif;
      letter-spacing: 2px;
      max-height: fit-content;
      color: white;
      border-radius: 3px;
      @media screen and (max-width: 700px){
        
        margin-top: -70px;
        width: 100vw;
        margin: auto;
 }
`


export const InputContainer = styled.div`

  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`

export const MyInput = styled(TextField)`
    align-self: flex-start;
    width: 85%;
    
`
export const LoadingContainer = styled.div`

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  height: 60vh;
  width: 90vw;
  background-color: white;
  box-shadow: 5px 5px 0px black ;
    
`
export const LoadingTag = styled.h2`

position: absolute;
top: 60%;
left: 50%;
transform: translate(-60%, -50%);
font-family: 'Orbitron', sans-serif;

`
