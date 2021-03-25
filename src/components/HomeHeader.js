import {NavRouteLinks} from "./NavRouteLinks";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import React from "react";

export const HomeHeader = () => {
    return (
        <nav className='home__navigation'>
            <NavRouteLinks />
            <ul className='home__navigation__links'>
                <NavLink to='/'>Start</NavLink>
                <Link to='foursteps' smooth={true} duration={1000}>O co chodzi?</Link>
                <Link to='about' smooth={true} duration={1000}>O nas</Link>
                <Link>Fundacja i organizacje</Link>
                <Link>Kontakt</Link>
            </ul>
        </nav>
    )

}