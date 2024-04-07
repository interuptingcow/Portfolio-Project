import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/Nick_slash_logo.png"
import profile_img from "../../assets/nick_profile_pic.jpg"

const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>  
        <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>After dedicating seven years to the insurance industry, I'm excited to embark on a new journey into the realm of technology and coding, particularly focusing on full stack development. </p>
                <p>My decision to transition stems from a desire to leverage my analytical skills honed in insurance and channel them into creating innovative solutions in the digital landscape, where my passion lies.</p>
                <p>I'm eager to embrace the challenges and opportunities that come with mastering new technologies and contributing to impactful projects as a full stack developer.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "30%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width: "50%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width: "20%"}} /></div>
            </div>
        </div>
        </div>   
        <div className="about-achievments">
            <div className="about-achievment">
                <h1></h1>
                <p></p>            
            </div>            
        </div> 
    </div>
  )
}

export default About
