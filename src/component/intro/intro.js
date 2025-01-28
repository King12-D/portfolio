import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from "react-scroll";

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">Meet <span className="introName">King Dav,</span> <br />A Full stack web developer</span>
                <p className="introPara">I am a skilled web developer with experience in creating and giving the best to my clients, <br/> making sure to put smile on thier faces</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default intro