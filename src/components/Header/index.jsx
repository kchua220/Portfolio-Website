
import "./Header.css"; 
import HeaderTitle from "../../ui/HeaderTitle";
import{ profile1 } from "../../assets";

import SocialHandles from "../../ui/SocialHandles";
import BreathCirciel from "../../ui/BreathCircle";


const Header = () => {
    return (
        <header id="header">
            <BreathCirciel />
            <div className="section__wrapper">
            
                <div className="grid uppper">
                    <div className="column">
                     <HeaderTitle />
                    </div>
                    <div className="column">
                        
                    <img src={profile1} className="profile__photo" alt="" />
                    </div>   
                </div> 
               
                        <div>
                            <SocialHandles />
                        </div>
                    
                </div>
        </header>
    );
};

export default Header;