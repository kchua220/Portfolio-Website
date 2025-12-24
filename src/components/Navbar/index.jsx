import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            {showSidebar && (
                <div 
                    className="aside__overlay"
                    onClick={() => setShowSidebar(false)}
                />
            )}

            <div className="navbar__container">
                <div className="navbar__logo" onClick={() => scroll.scrollToTop({ duration: 500 })}>
                    <Logo />
                    <span className="logo__text">KC</span>
                </div>

                <div className="navbar__center">
                    {menu.map((item, index) => (
                        <Link 
                            to={item.name.toLowerCase()} 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            className="nav__link" 
                            activeClass="active__link" 
                            key={index}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="navbar__right">
                    <a 
                        href="mailto:chuang.kevin220@gmail.com" 
                        className="contact__btn"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span>Contact</span>
                        <FaArrowUpRightFromSquare className="btn__icon" />
                    </a>

                    <button 
                        className="menu__toggle" 
                        onClick={() => setShowSidebar(true)}
                        aria-label="Open menu"
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <aside className={`sidebar ${showSidebar ? 'visible' : ''}`}>
                <div className="sidebar__header">
                    <div className="sidebar__logo">
                        <Logo />
                        <span>KC</span>
                    </div>
                    <button 
                        className="close__btn"
                        onClick={() => setShowSidebar(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="sidebar__links">
                    {menu.map((item, index) => (
                        <Link 
                            to={item.name.toLowerCase()} 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            className="sidebar__link" 
                            activeClass="active__sidebar__link"
                            onClick={() => setShowSidebar(false)}
                            key={index}
                        >
                            <span className="link__number">0{index + 1}</span>
                            <span className="link__text">{item.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="sidebar__footer">
                    <a 
                        href="mailto:chuang.kevin220@gmail.com" 
                        className="sidebar__contact"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Get In Touch
                    </a>
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;