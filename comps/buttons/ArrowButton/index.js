import React from 'react';
import './arrow.css';
import Router from 'next/dist/next-server/lib/router/router';


export default ({text, onClick, color}) =>
    <div>
        <button className="arrow_button_box">
            {text}
            {onClick}
            {color}
        </button>
    </div>