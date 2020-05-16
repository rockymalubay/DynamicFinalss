import React from 'react';
import './options.css';

const OptionsButton = ({text, color, onClick}) =>
    <div>
        <button style = {{backgroundColor:color}} className="options_button_box">
            {text}
            {onClick}
        </button>
    </div>


export default OptionsButton;