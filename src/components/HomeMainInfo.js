import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import React from "react";

export const HomeMainInfo = () => {
    return (
        <div className='home__mainLinks'>
            <div className='home__mainLinks__contentWrapper'>
            <h1 className='home__mainLinks__title'>
                Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={Decoration} alt='decoration' />
            <div className='home__mainLinks__btns'>
                <NavLink to='/login'>ODDAJ RZECZY</NavLink>
                <NavLink to='/login'>ZORGANIZUJ ZBIÓRKĘ</NavLink>
            </div>
            </div>
        </div>
    )
}