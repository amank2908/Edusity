import React from "react";
import './About.css';
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

function About(){
    return(
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about_img"/>
                <img src={play_icon} alt="" className="play-icon"/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A velit impedit saepe maiores reprehenderit aperiam accusamus, numquam dolore, quibusdam incidunt quis minus rem!</p>
            </div>

        </div>
    )
}
export default About 