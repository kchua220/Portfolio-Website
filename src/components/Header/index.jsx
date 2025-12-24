import "./Header.css"; 
import { profile1 } from "../../assets";
import SocialHandles from "../../ui/SocialHandles";

const Header = () => {
    return (
        <header id="header">
            <div className="header__decoration">
                <div className="blur__orb orb1"></div>
                <div className="blur__orb orb2"></div>
                <div className="blur__orb orb3"></div>
                
                <div className="meteor meteor1"></div>
                <div className="meteor meteor2"></div>
                <div className="meteor meteor3"></div>
                <div className="meteor meteor4"></div>
            </div>
            
            <div className="section__wrapper">
                <div className="header__content">
                    <div className="header__left">
                        <div className="name__section">
                            <h1 className="header__name">Kevin Chuang</h1>
                            <p className="header__title">Software Engineer & Data Scientist</p>
                            <p className="header__education">MSCS @ Columbia University</p>
                        </div>
                        
                        <SocialHandles />
                    </div>
                    
                    <div className="header__right">
                        <div className="profile__wrapper">
                            <img src={profile1} className="profile__photo" alt="Kevin Chuang" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;