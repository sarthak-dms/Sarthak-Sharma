import React from "react";
import './header.css'
import CTA from "./CTA"
import ME from "../../assests/me.png"
import HeaderSocials from "./HeaderSocials";

const Header =()=>{
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Sarthak Sharma</h1>
                <h5 className="text-light">SWD</h5>
                <CTA></CTA>
                <HeaderSocials/>
                
                <div className="me">
                    <img src={ME} alt="myImg"></img>
                </div>
                
                <a href="#contact" className="scrool__down">Scrool Down</a>
            </div>
        </header>
    )
}

export default Header