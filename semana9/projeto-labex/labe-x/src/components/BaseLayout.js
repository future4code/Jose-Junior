import React from 'react';
import NavBar from '../components/NavMenu'
import {MainDiv, VideoFrameLocal, ImageFrame,LogoName} from '../screens/HomeStyle'
import { VideoDivLocal, LogoDivLocal} from '../screens/ApplyStyles'









export default function BaseLayout(props){


    return <MainDiv>
            <NavBar
            seeTripsButton={props.isHomePage}
            onSeeTrips={props.seeTripsButton}
            onLogin={props.onLoginClick}
            loginButton={props.loginText}
            ></NavBar>
            <VideoDivLocal>
                <LogoDivLocal>
                        <LogoName color='white'>{props.whiteLogo}</LogoName>
                        <LogoName color='grey'> {props.greyLogo}</LogoName>
                </LogoDivLocal>
                {props.image && <ImageFrame src={props.image}/>}
                <VideoFrameLocal loop autoPlay muted>
                    <source src={props.video}/> 
                </VideoFrameLocal>
                
            </VideoDivLocal>  
           {props.children}
           
    </MainDiv>
}