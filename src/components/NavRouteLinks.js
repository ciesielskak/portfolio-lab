import React from "react";
import { Link } from "react-router-dom";

export const NavRouteLinks = () => {
    return (
        <div className='home__navigation__btns'>
            <Link to='/login'>Zaloguj</Link>
            <Link to='/register'>Załóż konto</Link>
        </div>


    )
}
