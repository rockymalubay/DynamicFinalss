import React from 'react';
import './text.css';

const Text = ({text,fontSize,color}) => {
    return(
            <div className="question">
                {text}
                {fontSize}
                {color}
            </div>
    )
}

Text.defaultProps = {
    text: "Are you eating?"}

export default Text