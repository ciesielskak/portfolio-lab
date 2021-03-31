import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import React from "react";
import {useStateValue} from "../context/StateProvider";

export const HomeMainInfo = () => {
    const [state, dispatch] = useStateValue()
    const { user } = state
    return (
        <div className='home__mainLinks'>
            <div className='home__mainLinks__contentWrapper'>
            <h1 className='home__mainLinks__title'>
                Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={Decoration} alt='decoration' />
            <>
                {
                    user?
                        <div className='home__mainLinks__btns'>
                        <NavLink to='/giveaway'>ODDAJ RZECZY</NavLink>
                        <NavLink to='/login'>ZORGANIZUJ ZBIÓRKĘ</NavLink>
                        </div>

                    :
                        <div className='home__mainLinks__btns'>
                    <NavLink to='/login'>ODDAJ RZECZY</NavLink>
                    <NavLink to='/login'>ZORGANIZUJ ZBIÓRKĘ</NavLink>
                        </div>

                }
                </>
            </div>
        </div>
    )
}