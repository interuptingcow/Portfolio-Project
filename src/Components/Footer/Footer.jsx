import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/Nick_logo.png"
import user_icon from "../../assets/user_icon.svg"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a freshman fullstack developer from the USA looking for full time remote work in the USA and abroad</p>
                </div>
                <div className="footer-top-right">

                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Nicholas Padovese. All Rights Reserved</p>
                <div className="footer-bottom-right">
                    <a href="https://www.linkedin.com/in/nicholas-padovese-97a546a/"><p>LinkedIn</p></a>
                    <a href="https://github.com/interuptingcow"><p>Github</p></a>
                    <a href="https://stackoverflow.com/users/24085152/nick-padovese"><p>Stack Overflow</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
