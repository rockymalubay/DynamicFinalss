import React from 'react';
import './anrx_icon.css';
import { FaBone, FaPills, FaHeart, FaFemale, FaMale, FaBrain, FaWineBottle, } from 'react-icons/fa';


const InfoIcon = ({ width, height, color, text}) =>

<div 
style={{width:width, height:height, color:color}}
className="icons">
    <div className="topRow">
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaBone color="Black" size="30" ></FaBone>
            </div>
            <p className="icon_text"> {text="Bone loss, fractures, and loss of muscle"} </p>
            
        </div>
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaPills color="Green"  size="30" ></FaPills>
            </div>
            <p className="icon_text"> {text="Anemia"} </p>
        </div>
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaHeart color="red" size="30" ></FaHeart>
            </div>
            <p className="icon_text"> {text="Heart problems, possible heart failure"} </p>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className="topRow">   
            <div className="iconBackground">
                <div className="icon_pos"  > 
                <FaFemale color="lightPink" size="30" ></FaFemale>
                </div>
                <p className="icon_text"> {text="In females, absence of a period"} </p>
                
            </div>
            <div className="iconBackground">
                <div className="icon_pos"  > 
                <FaMale color="skyBlue" size="30" ></FaMale>
                </div>
                <p className="icon_text"> {text="In males, decreased testosterone"} </p>
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