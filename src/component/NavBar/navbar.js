import React, { useState } from "react";
import { Link } from "react-scroll";
import './navbar.css';
import logo from'../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menue from '../../assets/menu.png';

const Navbar = () => {
    const [showMenue, setShowMenue] = useState (false);
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenue">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">clients</Link>
            </div>
            <button className="desktopMenueBtn" onClick={()=> {
                document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenueImg"></img>Contact Me</button>
            <img src={menue} alt="Menue" className="mobMenue"onClick={()=>setShowMenue(!showMenue)} />
            <div className="navMenue" style={{display: showMenue? 'flex': 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenue(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenue(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenue(false)}>Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenue(false)}>clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenue(false)}>Contact</Link>
            </div>
        </nav>
        
    )
}

export default Navbar
