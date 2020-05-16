import React, { useEffect } from 'react';
import Router from 'next/router';
import './landing.css';
import OptionButton from '../../comps/OptionsButton';
import Logo from './Logo.png';
import GlobalStateProvider from '../../providers/GlobalStateProvider'

function testButton() {
    document.querySelector(".LandingPageContainer_about").style.left = "-100%";
    setTimeout(function(){
        Router.push("/QuestionPage_1");
        }, 1000)
    }

    function hotlineButton() {
        document.querySelector(".LandingPageContainer_about").style.left = "-100%";
        setTimeout(function(){
            Router.push("/HotlinePage");
            }, 1000)
        }

const LandingPage = () => {

    

    return (
        
        <GlobalStateProvider>
            <div className="LandingPageContainer_about">

                <div className="logo">
                    <img src={Logo} />
                </div>

                <div className="buttonBox">
                    <div className="button" onClick={testButton}>
                        <OptionButton text="Start Test"/>
                    </div>
                    <br></br>
                    <div className="button" onClick={hotlineButton}>
                        <OptionButton text="Discover Hotline Page" />
                    </div>
                </div>
            </div>
        </GlobalStateProvider>
    )

}

LandingPage.defaultProps = {
    msg: "hi"

}

export default LandingPage; 