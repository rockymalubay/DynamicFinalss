import React from 'react';
import '../HotlineBar/hotlinebar.css';
 
const HotlineBar = ({onClick}) =>
<div className="hotline_bar"> 
    <div className="hotline_numbers">    
        <h3 onClick= {onClick}>NEDIC = 1-866-NEDIC-20</h3>
        <h3 onClick= {onClick}>NSPL = 1-800-273-8255</h3>
    </div>

</div>

export default HotlineBar;