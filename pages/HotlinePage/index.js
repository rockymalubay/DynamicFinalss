import React, {useEffect} from 'react';
import Router from 'next/router';
import TextComp from '../TextComp';
import TextCo from '../TextCo';
import ArrowButton from '../../comps/buttons/ArrowButton';
import MenuButton from '../../comps/MenuButton';
import OptionsButton from '../../comps/OptionsButton';
import '../QuestionPages/questionPages.css';
import Input from '../../comps/Input';
import './hotline.css';
import {FiPhoneCall} from 'react-icons/fi';
import {FaHeadset} from 'react-icons/fa';
import Menu from '../../comps/Menu';

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

export default({fontSize}) => {

    
    useEffect(() => {
        setTimeout(()=>{
            document.querySelector(".pageContainer").style.opacity= "1";
        }, 50); 
    },[]);

    return(
        <div className="pageContainer">
            <div className="hotlineBox">
                <div>
                    <FiPhoneCall className="callIcon"/>
                    <div>
                        <div style={{color:"rgb(252, 121, 84)"}}>
                            <TextComp text="NEDIC"/>
                        </div>
                        <TextCo  text="1-866-NEDIC-20"/>
                        <TextCo  text="nedic@uhn.ca "/>
                    </div>   
                </div>
                <div>
                    <FaHeadset style={{paddingLeft:"15px", paddingRight:"15px"}} className="callIcon"/>
                    <div>
                        <div style={{color:"rgb(252, 121, 84)"}}>
                            <TextComp 
                            text="National Suicide Prevention Lifeline"/>
                        </div>
                        <TextCo  text="1-800-273-8255"/>
                    </div>   
                </div>
                <div className="email">
                    <TextCo text="Email to us:"/>
                </div>
            </div>
            <div className="inputComp">
                <div>
                    <div>
                        <TextCo text="Name*"/>
                        <div>
                            <input className="inputBox"/>
                        </div>
                    </div>
                    <div>
                        <TextCo text="Email Address*"/>
                        <div>
                            <input className="inputBox"/>
                        </div>
                    </div>
                    <div>
                        <TextCo text="Message*"/>
                        <div >
                            <input className="inputBox" id="inputSize"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sendButton">
                <ArrowButton  text="Send"/>
            </div>
            <div className="menuButton" onClick={MenuToggle}>
                <MenuButton/>
            </div>
            <div>
                    <Menu />
                </div>
        </div>
    )
}