import React, { useReducer, useEffect } from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';
import './qPage_4.css';
import QuImage from './Question4.png';
import { useGlobalState } from '../../providers/GlobalStateProvider'

function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_3");
    }
}

var menu_state = false;

function MenuToggle() {
    if(menu_state == false){
        menu_state = true;
        document.querySelector(".menu_box").style.display = "block"
    }else {
        if(menu_state == true){
            menu_state = false;
            document.querySelector(".menu_box").style.display = "none"
        }
    }
    
}

export default () => {
    const [ globalState, setGlobalState ] = useGlobalState()
    const { 
        anxiety,
        bodyImage, 
        mentalIssue,
        recentTragedy, 
    } = globalState
    console.log('state', globalState)


    function PageResults() {
        const { yes, no} = globalState

        if(bodyImage || mentalIssue ) {
            document.querySelector(".pageContainer").style.left = "-100%";
            setTimeout(function(){
                Router.push("/AboutPage_Anorexia");
                }, 1000)
        } else if( anxiety ) {
            document.querySelector(".pageContainer").style.left = "-100%";
            setTimeout(function(){
                Router.push("/AboutPage_Binge");
                }, 1000)
        } else if( recentTragedy) {
            document.querySelector(".pageContainer").style.left = "-100%";
            setTimeout(function(){
                Router.push("/AboutPage_Bulimia")
                }, 1000)
        }
        else {
            alert('Please select at least one option!')
        }
    };

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector(".pageContainer").style.opacity= "1";
        }, 50); 
    },[]);

    return(
        <div className="pageContainer">
                <div>
                    <Menu />
                </div>
            <div className="imagePo">
                <img src={QuImage}/>
            </div>
            <div className="textComp">
                <TextComp
                text="Are you doing self-induced vomiting?"/>
            </div>
            <div className="answers">
            <div onClick={() => setGlobalState({ yes: !globalState.yes })}>

                <OptionsButton
                            color={globalState.yes ? "#5fcc72" : "#FC7753"}
                text="Yes"
                />
            </div>
            <div onClick={() => setGlobalState({ no: !globalState.no })}>
                <OptionsButton
                                color={globalState.no ? "#5fcc72" : "#FC7753"}
                text="No"
                />
            </div>
            </div>

            <div className="menuButton" onClick={MenuToggle}>
                <MenuButton/>
            </div>
            <div className="arrowButtons">
                <div className="leftArrow" onClick={BackPage}>
                    <ArrowButton
                    text="🡠"
                    />
                </div>
                <div className="rightArrow" onClick={PageResults}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}