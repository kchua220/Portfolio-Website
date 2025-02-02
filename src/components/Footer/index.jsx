
import "./Footer.css";
import {menu} from "../../data"
import {Link} from "react-scroll"
import SocialHandles from "../../ui/SocialHandles";
const Footer = () => {
    return (
        <footer>
            <div className="section__wrapper">
                <ul className="flex__center nav">
                    {menu.map((list, index) =>(
                        <Link to={list.name.toLowerCase()} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="nav__tab" 
                        key={index} 
                        >
                            {list.name}
                    </Link>
                    ))}
                </ul>
                <SocialHandles />
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