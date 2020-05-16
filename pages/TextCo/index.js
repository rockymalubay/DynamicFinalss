import React from 'react';
import './textCo.css';

 export default({text,fontSize,color}) => {
    return(
            <div className="bodyCopy">
                {text}
                {fontSize}
                {color}
            </div>
    )
}
