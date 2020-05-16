import React from 'react';
import './logo.css';

const defaulting = require('./Logo.png');

const Logo = ({img}) => 
<div className= "logo">
<img src={img}/>
</div>

Logo.defaultProps = {

img: defaulting,
}

export default Logo;