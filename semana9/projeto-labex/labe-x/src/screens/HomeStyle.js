import styled from 'styled-components'


export const MainDiv = styled.div`

    margin: 0;
    padding: 0;
    min-height: 95vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:800px){
        width: 100vw;
    }
`

export const VideoDiv = styled.div`
    
    min-width: 100vw;
    max-height: 400px;
    z-index: 3;
    padding:0px;
    overflow: hidden;
    box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
    position: relative;
    border-bottom: 2px solid white;
   
    

`

export const VideoFrame = styled.video`

    height: 100vh;
    width: 100vw;
    margin: 0px;
    object-fit: cover;
    @media screen and (max-width:800px){
       
        width: 100vw;
        height: 40vh;
    }
`
export const VideoFrameLocal = styled.video`

    height: 100vh;
    width: 100vw;
    margin: 0px;
    object-fit: cover;
    @media screen and (max-width:800px){
       
        width: 100vw;
       
    }
`

export const ImageFrame = styled.img`

    height: 100vh;
    width: 100vw;
    margin: 0px;
    object-fit: cover;
    @media screen and (max-width:800px){
       
        width: 120vw;
    }
`

export const TripsDiv = styled.div`
     
     display: flex;
     align-items: flex-start;
     justify-content: center;
     flex-flow: row wrap;
     width: 100%;
     min-height: 50vh;
  max-height: max-content;
  background-color: #11111d;
`

export const LogoDiv = styled.div`
     
    
     position: absolute;
     top: 50%;
     left: 50%;
     font-size: 60px;
     letter-spacing: 4px;
     transform: translate(-50%, -50%);
     display: flex;

`
export const LogoName = styled.h1`
     
   
     font-size: 80px;
     letter-spacing: 4px;
     
     color: ${props=>props.color};
     @media screen and (max-width:800px){
        font-size:20px;
        margin-left: 8px;
    }
     

`