import React from 'react';
import './button.css';



const MainButton = ({btn_txt, color, backgroundColor, OnClick, txt_decoration, width, height}) => 


<div
style={{backgroundColor:backgroundColor, color:color, textDecoration:txt_decoration, width:width, height:height, }}
className="main_btn" >

{/* Font link below */}
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>


    <div className="main_btn_txt"> {btn_txt} </div>

</div>;



MainButton.defaultProps = {
    btn_txt:"This is a default button!",
    color:"white",
    backgroundColor:"#fc7753",
    txt_decoration:"Underline",
    OnClick:{},
}

export default MainButton;
