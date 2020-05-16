import React from 'react';
import Router from 'next/router';
import './menu.css';
import Logo from "./Logo2.svg";
import homeIcon from './homeicon.svg';
import testIcon from './testicon.svg';
import factIcon from './factsicon.svg';
import helpIcon from './helpicon.svg';

function testButton() {
    Router.push("/QuestionPage_1");

}

function factButton() {
Router.push("/AboutPage_Anorexia");

}

function helpButton() {
Router.push("/HotlinePage");

}

function homeButton() {
    Router.push("/LandingPage");
    
    }

const Menu = ({text, img}) => <div className="menu_box">
    <div className="logo_box"> <img src= {Logo}/></div>

        <div className="menu_list_box">
            <div className="menu_item" onClick={homeButton}> <img src = {homeIcon}/> <h2>Home</h2></div>
            <div className="menu_item" onClick={testButton}> <img src = {testIcon}/> <h2>Test</h2> </div>
            <div className="menu_item" onClick={factButton}> <img src = {factIcon}/> <h2>Facts</h2> </div>
            <div className="menu_item" onClick={helpButton}> <img src = {helpIcon}/> <h2>Helplines</h2> </div>
        </div>
    <a className="about_box" >About us</a>
</div>





export default Menu;