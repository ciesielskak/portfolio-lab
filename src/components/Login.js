import React from 'react';
import { HomeHeader } from "./HomeHeader";
import Decoration from '../assets/Decoration.svg'


export const Login = () => {
    return (
        <div className='login__container'>
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