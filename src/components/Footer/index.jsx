
import "./Footer.css";
import {menu} from "../../data"
import {Link} from "react-scroll"
import SocialHandles from "../../ui/SocialHandles";
const Footer = () => {
    return (
        <footer>
            <div className="section__wrapper">
                <ul className="flex__center nav">
                    
                </ul>
                <div className="copyright">
                    <h3>Copyright &copy; All right reserved - | 2025 </h3>
                </div>
                <div className="base__logo">
                    <h1 className="full__name shine">Kevin Chuang</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer;