import React from 'react';
import Decoration from '../assets/Decoration.svg';
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { NavRouteLinks } from "./NavRouteLinks";


export const Home = () => {
    return (
        <div className='home__container' id='home'>
            <div className='home__upperpart__wrapper'>
                <div className='home__upperpart__background'>
                </div>
                <div className='home__mainInfo__wrapper'>
                    <HomeHeader />
                    <HomeMainInfo />
                </div>
            </div>
           <HomeThreeColumns />
        </div>

    )
}


export const HomeHeader = () => {
    return (
        <nav className='home__navigation'>
           <NavRouteLinks />
            <ul className='home__navigation__links'>
                <NavLink to='/'>Start</NavLink>
                <Link to='foursteps' smooth={true} duration={1000}>O co chodzi?</Link>
                <Link to='about' smooth={true} duration={1000}>O nas</Link>
                <li>Fundacja i organizacje</li>
            </ul>
        </nav>
    )

}

const HomeMainInfo = () => {
    return (
        <div className='home__mainLinks'>
            <h1 className='home__mainLinks__title'>
                Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={Decoration} alt='decoration' />
            <div className='home__mainLinks__btns'>
                <NavLink to='/login'>ODDAJ RZECZY</NavLink>
                <NavLink to='/login'>ZORGANIZUJ ZBIÓRKĘ</NavLink>
            </div>
        </div>
    )
}

const HomeThreeColumns = () => {
    return (
        <div className='home__columns__container'>
            <div className='home__column'>
                <h1>10</h1>
                <h3>ODDANYCH WORKÓW</h3>
                <span>Lorem ipsum dolor sit amet, consectetur
                    adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
            <div className='home__column'>
                <h1>5</h1>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <span>Lorem ipsum dolor sit amet, consectetur
                    adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
            <div className='home__column'>
                <h1>7</h1>
                <h3>ZORGANIZOWANY ZBIÓREK</h3>
                <span>Lorem ipsum dolor sit amet, consectetur
                    adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
        </div>
    )
}