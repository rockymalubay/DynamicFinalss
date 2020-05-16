import React, { useReducer, useEffect } from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';
import './qpage_2.css';
import Q2Image from './Question2.png';
import { useGlobalState } from '../../providers/GlobalStateProvider'




function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_1");
    }
};

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

      console.log('state', globalState)

    function PageThree() {
        const { bodyImage, mentalIssue, anxiety, recentTragedy } = globalState

        if(bodyImage || mentalIssue || anxiety || recentTragedy) {
            document.querySelector(".pageContainer").style.left = "-100%";
            setTimeout(function(){
                Router.push("/QuestionPage_3"); 
                }, 1000)
        } else {
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
                <img src={Q2Image}/>
            </div>
            <div className="textComp">
                <TextComp
                text="Do you think you have a problem with?"/>
            </div>
            <div className="answers">

            <div 
                
                onClick={() => setGlobalState({ bodyImage: !globalState.bodyImage })}
            >
                <OptionsButton 
                // style={{backgroundColor: globalState.bodyImage ? "green" : " blue"}}
                color={globalState.bodyImage ? "#5fcc72" : "#FC7753"}
                text="Body Image?"
                />
            </div>
            <div onClick={() => setGlobalState({ mentalIssue: !globalState.mentalIssue })}>
                <OptionsButton
                color={globalState.mentalIssue ? "#5fcc72" : "#FC7753"}
                text="Mental Issue?"
                />
            </div>
            <div onClick={() => setGlobalState({ anxiety: !globalState.anxiety })}>
                <OptionsButton
                color={globalState.anxiety ? "#5fcc72" : "#FC7753"}
                text="Anxiety?"
                />
            </div>
            <div onClick={() => setGlobalState({ recentTragedy: !globalState.recentTragedy })}>
                <OptionsButton
                color={globalState.recentTragedy ? "#5fcc72" : "#FC7753"}
                text="Recent Tragedy?"
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
                <div className="rightArrow" onClick={PageThree}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}