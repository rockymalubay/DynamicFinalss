import React from 'react';
import OptionsButton from '../comps/OptionsButton';
import ArrowButton from '../comps/buttons/ArrowButton';
import Logo from '../comps/Logo';
import Menu from'../comps/Menu';
import MenuButton from '../comps/MenuButton';
import menuIcon from '../comps/MenuButton/menuicon.svg';
import exitIcon from '../comps/MenuButton/exiticon.svg';
import HotlineBar from '../comps/HotlineBar';
import QuestionButtons from '../pages/QuestionPages/QuestionButtons';

export default {
    title:"My comps",
    component:OptionsButton
}

export const MyLogo = () =>
<div>
    <Logo/>
</div>

export const MyQuestionButtons = () =>
<div>
    <QuestionButtons/>
</div>

export const MyOptionsButton = () => 
<div>
<OptionsButton 
text = "Too Little?"
onClick="" />
</div>

export const MyArrowButton = () => 
<div>
<ArrowButton 
/>
</div>

export const MyMenu =() => 
<div>
    <Menu />
</div>

export const MyMenuButton =() => <div>
    <MenuButton 
    img = {menuIcon}
    />
</div>
export const MyHotlineBar =() => 
<div>
    <HotlineBar 
    onClick = ""
    />
</div>



