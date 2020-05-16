import React from 'react';
import './menu_button.css';
import menuIcon from './menuicon.svg';
import exitIcon from './exiticon.svg';
import {TiThMenu} from 'react-icons/ti';

const MenuButton = ({img}) =>
<div>
    <div className="outer_circle">
        <div className="inner_circle">    
            <TiThMenu className="icon" 
            // src= {menuIcon}
            />
        </div>
    </div>
</div>




export default MenuButton;