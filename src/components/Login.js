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
                <div className='login__inputs__wrapper'>
                    <h2>Email
                </h2>
                    <input type='email'/>
                    <h2>Hasło
                </h2>
                    <input type='password'/>
                </div>
                <div className='login__btns'>
                    <button>Zaloguj</button>
                    <button>Załóż konto</button>
                </div>
            </form>
        </div>

    )
}