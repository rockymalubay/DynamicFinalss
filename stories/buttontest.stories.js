import React from 'react';
import Mainbutton from '../comps/buttons'


export default {
    title: "Buttons",
    component: Mainbutton,
};



export const MyCustomButton_default = () => <Mainbutton />;

export const MyCustomButton_Helplinebutton = () => <Mainbutton
    btn_txt="Click here to discover helplines"
    color="white"
    backgroundColor="#fc7753"
    txt_decoration="Underline"
    />;
export const MyCustomButton_anorexiabutton = () => <Mainbutton
    btn_txt="Anorexia"
    color="white"
    backgroundColor="#22B573"
    txt_decoration="none"
    />;

