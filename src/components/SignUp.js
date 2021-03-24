import Decoration from "../assets/Decoration.svg";
import React from "react";
import {HomeHeader} from "./Home";

export const SignUp = () => {
    return (
        <div className='login__container'>
            <HomeHeader />
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
                <label>Email
                <input type='email'/>
                </label>
                <label>Hasło
                <input type='password'/>
                </label>
                <label>Powtórz hasło
                <input type='password'/>
                </label>
                <button>Zaloguj</button>
                <button>Załóż konto</button>
            </form>
        </div>

    )
}