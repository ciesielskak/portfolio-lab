import React from 'react';
import Decoration from '../assets/Decoration.svg';
import { Link } from "react-router-dom";

export const LogoutSuccess = () => {
    return (
        <div className='logout__success__container'>
            <div className='logout__success__card'>
                <h1>
                Wylogowanie nastąpiło pomyślnie!
            </h1>
                <img src={Decoration} alt='decoration' />
                <Link to='/'>Strona główna</Link>
            </div>
        </div>
    )
}