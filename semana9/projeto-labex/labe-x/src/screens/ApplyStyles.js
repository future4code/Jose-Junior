import React from 'react';
import {VideoDiv, LogoDiv, } from './HomeStyle'
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';




export const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#3e2963',
      }
    },
  });

export const VideoDivLocal = styled(VideoDiv)`
     
     max-height: 100vh;

`
export const LogoDivLocal = styled(LogoDiv)`
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width:800px){
        top: 25%;
        width: 60%;
    }

`
export const MyInput = styled(TextField)`
    width: ${props=>props.width};
`
export const DivForm =styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: rgba(255,255,255,0.7);
    z-index: 5;
    min-height: 400px;
    max-height: 400px;
    min-width: 40%;
    position: absolute;
    padding-top: 20px;
    border-radius: 20px;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    overflow-y: scroll;
    @media screen and (max-width:800px){
        top: 58%;
        min-width: 80%;
        
    }
`

export const DivInput = styled.div`
    display: flex;
    width: ${props=>props.width};
    margin-bottom: 10px;
    
    justify-content: center;

`
