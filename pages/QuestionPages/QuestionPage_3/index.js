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
                text="How often is it troubling you?"/>
            </div>
            <div className="answers">
                <OptionsButton
                text="Once a Day"
                />
                <OptionsButton
                text="3 times a Day"
                />
                <OptionsButton
                text="All Day"
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