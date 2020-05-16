import React from 'react';
import './binge_icon.css';
import { FaBone, FaPills, FaHeart, FaFemale, FaMale, FaBrain, FaWineBottle, FaHamburger, FaAngry, FaCogs, FaSadCry } from 'react-icons/fa';


const InfoIcon = ({ width, height, color, text}) =>

<div 
style={{width:width, height:height, color:color}}
className="icons">
    <div className="topRow">
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaHamburger color="Orange" size="30" ></FaHamburger>
            </div>
            <p className="icon_text"> {text="Obesity"} </p>
            
        </div>
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaAngry color="Green"  size="30" ></FaAngry>
            </div>
            <p className="icon_text"> {text="Social isolation"} </p>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className="topRow">   
            <div className="iconBackground">
                <div className="icon_pos"  > 
                <FaCogs color="Red" size="30" ></FaCogs>
                </div>
                <p className="icon_text"> {text="Problems functioning at work, with your personal life or in social situations"} </p>
                
            </div>
            <div className="iconBackground">
                <div className="icon_pos"  > 
                <FaSadCry color="skyBlue" size="30" ></FaSadCry>
                </div>
                <p className="icon_text"> {text="Poor quality of life"} </p>
                <br></br>
            </div>
            </div>
    <h3 className="title_txt2">Other mental health and problems you may experience are:</h3>
    <br></br>
    <br></br>
    <br></br>
            <div className="bottomRow">
                
                <div className="iconBackground">
                    <div className="icon_pos">
                    <FaBrain color="lightPink" size="30" ></FaBrain>
                    </div>
                    <p className="icon_text"> {text="Depression, anxiety and other mood disorders & Personality disorders"} </p>
                </div>

                <div className="iconBackground">
                    <div className="icon_pos">
                    <FaWineBottle color="red" size="30" ></FaWineBottle>
                    </div>
                    <p className="icon_text"> {text="Alcohol and substance misuse, self-injury, and suicidal thoughts"} </p>
                </div>
            </div>
        
</div> 






function iconClick() {
    alert("")
}


InfoIcon.defaultProps = {
    text:"Here is default text. I am default text",
    color:"black",
    OnClick:iconClick,
}


export default InfoIcon;