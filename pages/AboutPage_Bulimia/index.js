import React, {useEffect} from 'react';
import './bulimia.css';
import InfoIcon from '../../comps/Bulimia_Icons';
import MainButton from '../../comps/buttons';
import TextComp from '../TextComp';
import MenuButton from '../../comps/MenuButton';
import Menu from '../../comps/Menu';
import Router from 'next/router';

const BulimiaPage = () => {

    var menu_state = false;

function MenuToggle() {
    if(menu_state == false){
        menu_state = true;
        document.querySelector(".menu_box").style.display = "block"
    }else {
        if(menu_state == true){
            menu_state = false;
            document.querySelector(".menu_box").style.display = "none"
        }
    }
    
}
    
    function helplineButton() {
    
            Router.push("/HotlinePage");
    }

    function anorexiaButton() {
    
        Router.push("/AboutPage_Anorexia");
}

    function bingeButton() {
    
        Router.push("/AboutPage_Binge");
}

useEffect(() => {
    setTimeout(()=>{
        document.querySelector(".pageContainer_aboutBulimia").style.opacity= "1";
    }, 50); 
},[]);

    return <div className="pageContainer_aboutBulimia"> 
        {/* <FaBone className="icon_positioning"size="40" color="Black"/> */}
        <div className="title_txt">
            <h2> You may have: </h2>
</div>
        
        <div className="buttons"> 
        <div onClick={anorexiaButton}>
            <MainButton 
                btn_txt="Anorexia"
                color="#22B573"
                backgroundColor="White"
                txt_decoration="none"
                width="125px"
            />
        </div>

        <div>
            <MainButton 
                btn_txt="Bulimia"
                color="white"
                backgroundColor="#22B573"
                txt_decoration="none"
                width="125px"
            /> 
        </div>

        <div onClick={bingeButton}>
            <MainButton 
                btn_txt="Binge-eating"
                color="#22B573"
                backgroundColor="White"
                txt_decoration="none" 
                width="125px"
            /> 
        </div>

        </div>
        <div className="title_txt">
            <hr></hr>
            <h3>You may be at increased risk towards:</h3>
        </div>

        <div className="icon-set">
                <InfoIcon> </InfoIcon>
                
        </div>
        <div className="bottombtnpos">
                    <div className="btn_pos" onClick={helplineButton}  >
                <MainButton btn_txt="Click here to discover helplines" width="250px"></MainButton>  
                </div>

                <div>
                        <Menu />
                    </div>

               
        </div>
        <div className="menu_pos" onClick={MenuToggle} >
                    <MenuButton />
                </div>
    </div>



    
}


BulimiaPage.defaultProps = {
    msg: "hi"

}

export default BulimiaPage; 