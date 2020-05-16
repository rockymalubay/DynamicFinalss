import React, { useReducer, useEffect } from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';
import './qPage_3.css';
import Q3Image from './Question3.png';
import { useGlobalState } from '../../providers/GlobalStateProvider';
import '../../comps/OptionsButton/options.css'



function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_2");
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

      console.log('state', globalState)

    function PageFour() {
        const { onceDay, threeDay, allDay } = globalState

        if(onceDay || threeDay || allDay) {
            document.querySelector(".pageContainer").style.left = "-100%";
            setTimeout(function(){
                Router.push("/QuestionPage_4"); 
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
                <img src={Q3Image}/>
            </div>
            <div className="textComp">
                <TextComp
                text="How often is it troubling you?"/>
            </div>
            <div className="answers">

            <div onClick={() => setGlobalState({ onceDay: !globalState.onceDay })}>
                <OptionsButton
                color={globalState.onceDay ? "#5fcc72" : "#FC7753"}
                text="Once a Day"
                />
            </div>
            <div onClick={() => setGlobalState({ threeDay: !globalState.threeDay })}>
                <OptionsButton
                color={globalState.threeDay ? "#5fcc72" : "#FC7753"}
                text="3 times a Day"
                />
            </div>
            <div onClick={() => setGlobalState({ allDay: !globalState.allDay })}>
                <OptionsButton
                color={globalState.allDay ? "#5fcc72" : "#FC7753"}
                text="All Day"
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
                <div className="rightArrow" onClick={PageFour}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}