import React from 'react';
import ArrowButton from '../../../comps/buttons/ArrowButton';
import TextComp from '../../TextComp';
import OptionsButton from '../../../comps/OptionsButton';
import MenuButton from '../../../comps/MenuButton';
import '../questionPages.css';



export default () => {
    return(
        <div className="pageContainer">
            <div className="textComp">
                <TextComp
                text="Are you eating?"/>
            </div>
            <div className="answers">
                <OptionsButton
                text="Too Little?"
                />
                <OptionsButton
                text="Too Much?"
                />
            </div>
            <div className="menuButton">
                <MenuButton/>
            </div>
            <div className="arrowButtons">
                <div className="leftArrow">
                    <ArrowButton
                    text="🡠"
                    />
                </div>
                <div className="rightArrow">
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}