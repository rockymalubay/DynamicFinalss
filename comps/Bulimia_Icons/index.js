import React from 'react';
import './bulim_icon.css';
import { FaBone, FaPills, FaHeart, FaFemale, FaMale, FaBrain, FaWineBottle, FaHeartBroken, FaClinicMedical, FaSadTear, FaCandyCane, FaTooth, FaTeethOpen } from 'react-icons/fa';


const InfoIcon = ({ width, height, color, text}) =>

<div 
style={{width:width, height:height, color:color}}
className="icons">
    <div className="topRow">
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaHeartBroken color="red" size="30" ></FaHeartBroken>
            </div>
            <p className="icon_text"> {text="Heart problems. These can include a rapid or pounding heart"} </p>
            
        </div>
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaTeethOpen color="Green"  size="30" ></FaTeethOpen>
            </div>
            <p className="icon_text"> {text="Tearing of the lining of your esophagus,"} </p>
        </div>
        <div className="iconBackground">
            <div className="icon_pos"  > 
            <FaClinicMedical color="teal" size="30" ></FaClinicMedical>
            </div>
            <p className="icon_text"> {text="Reproductive issues, irregular or missed periods, and fertility problems"} </p>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className="topRow">   
            <div className="iconBackground">
                <div className="icon_pos"  > 
                <FaCandyCane color="lightPink" size="30" ></FaCandyCane>
                </div>
                <p className="icon_text"> {text="Diabetes is linked to Bulimia"} </p>
                
            </div>
            <div className="iconBackground">
                <div className="icon_pos"  > 
                <FaTooth color="skyBlue" size="30" ></FaTooth>
                </div>
                <p className="icon_text"> {text="Stomach acid can damage tooth enamel"} </p>
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