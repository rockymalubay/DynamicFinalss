import React, { useReducer, useEffect } from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';
import './qpage_1.css';
import Q1Image from './Question1.png';
import { useGlobalState } from '../../providers/GlobalStateProvider'




function BackPage() {

    if(confirm("Do you want to go back to the homepage?")){
        Router.push("/LandingPage");
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


export default ({img}) => {
    const [ globalState, setGlobalState ] = useGlobalState()
    // const [ state, setState ] = useReducer(reducer, {})
    
    // function reducer (currentState, newState) {
    //   return {...currentState, ...newState}
    // }
    //   console.log('state', globalState)

    function PageTwo() {
        const { tooLittle, tooMuch } = globalState

        if(tooLittle || tooMuch) {
            document.querySelector(".pageContainer").style.left = "-100%";
            setTimeout(function(){
                Router.push("/QuestionPage_2"); 
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
                <img src={Q1Image}/>
            </div>
            <div className="textComp">
                <TextComp
                text="Are you eating?"/>
            </div>
            <div className="answers">
                <div onClick={() => setGlobalState({ tooLittle: !globalState.tooLittle })}>
                <OptionsButton
                            color={globalState.tooLittle? "#5fcc72" : "#FC7753"}
                text="Too Little?"
                />
                </div>
                <div onClick={() => setGlobalState({ tooMuch: !globalState.tooMuch })}>
                <OptionsButton
                            color={globalState.tooMuch ? "#5fcc72" : "#FC7753"}
                text="Too Much?"
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
                <div className="rightArrow"  onClick={PageTwo}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}