import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/Nick_slash_logo.png"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <a href={work.w_link}> <img key={index} src={work.w_img} alt="" /> </a>
        })}
      </div>
      <div className="mywork-showmore">
        <a href="https://github.com/interuptingcow">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default MyWork
