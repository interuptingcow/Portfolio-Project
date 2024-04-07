import React from 'react'
import './Hero.css'
import profile_img from "../../assets/nick_profile_pic.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I am Nicholas Padovese,</span> Full Stack Developer from California</h1>
      <p>I am beginning my career in the coding space with education from UC Berkeley Extention in frontend and backend web development</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        <a href="\src\assets\Professional-Resume.pdf" download><div className="hero-resume">My Resume</div></a>
      </div>
    </div>
  )
}

export default Hero
