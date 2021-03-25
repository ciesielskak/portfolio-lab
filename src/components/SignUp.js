import Decoration from "../assets/Decoration.svg";
import React from "react";
import { HomeHeader } from "./HomeHeader";

export const SignUp = () => {
    return (
        <div className='login__container'>
            <SignUpCard />
        </div>
    )
}

const SignUpCard = () => {
    return (
        <div className='login__card'>
            <h1>Załóż konto</h1>
            <img src={Decoration} alt='decoration'/>
            <form>
                <div className='login__inputs__wrapper'>
                    <h2>Email
                    </h2>
                    <input type='email'/>
                    <h2>Hasło
                    </h2>
                    <input type='password'/>
                    <h2>Powtórz hasło
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