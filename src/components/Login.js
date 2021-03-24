import React from 'react';
import {Home, HomeHeader} from "./Home";
import Decoration from '../assets/Decoration.svg'


export const Login = () => {
    return (
        <div className='login__container'>
            <HomeHeader />
            <LoginCard />
        </div>
    )
}

const LoginCard = () => {
    return (
        <div className='login__card'>
            <h1>Zaloguj się</h1>
            <img src={Decoration} alt='decoration'/>
            <form>
                <label>Email
                    <input type='email'/>
                </label>
                <label>Hasło
                    <input type='password'/>
                </label>
                <button>Zaloguj</button>
                <button>Załóż konto</button>
            </form>
        </div>

    )
}