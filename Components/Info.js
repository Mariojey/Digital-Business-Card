import React from "react"
export default function Info(){
    return(
        <div className="header">
            <div className="img"></div>
            <h1 className="mariojey-header-text">Mariusz Jacek</h1>
            <p className="full-stack-dev-header-text">Full-Stack Developer</p>
            <div className="header-icons">
                <a href="mariuszjacek3bip@gmail.com" className="link-gmail">
                    <img src="./public/gmail-logo-24.png" alt="" />
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/mariusz-jacek-9b02b81b7/?originalSubdomain=pl" className="link-linkedin">
                    <img src="./public/linkedin-logo-24.png" alt="" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}