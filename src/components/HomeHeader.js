import {NavRouteLinks} from "./NavRouteLinks";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import React, { useState } from "react";

export const HomeHeader = () => {
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(prevState => !prevState)
    }
    return (
        <header className='home__navigation'>
            <nav className={active? 'home__navigation__nav active' : 'home__navigation__nav'}>
                    <NavRouteLinks toggle={toggleNav}/>
                    <ul className='home__navigation__links'>
                        <NavLink to='/' onClick={toggleNav}>Start</NavLink>
                        <Link to='foursteps' smooth={true} duration={1000} onClick={toggleNav}>O co chodzi?</Link>
                        <Link to='about' smooth={true} duration={1000} onClick={toggleNav}>O nas</Link>
                        <Link to='foundations' smooth={true} duration={1000} onClick={toggleNav}>Fundacja i organizacje</Link>
                        <Link to='contact' smooth={true} duration={1000} onClick={toggleNav}>Kontakt</Link>
                    </ul>
            </nav>
            <div className='home__navigation__burger' onClick={toggleNav}>
                <div className='home__navigation__burger__wrapper'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>

    )

}