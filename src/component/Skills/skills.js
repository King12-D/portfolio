import React from "react";
import './skills.css';
import UIDesignn from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What i Do</span>
            <span className="skillDesc">i am a passionate web developer with experience in creating visual apealing website and mobile apps . I have a strong for web development and a keen eye for detailed work. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesignn} alt="UIDesignn" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cloth Branding</h2>
                        <p>I make all types on cloth branding for all genders</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="ebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WebDesign</h2>
                        <p> I create all types of proffessional websites</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>I make all types on cloth branding for all genders</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills