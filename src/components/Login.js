import React, { useState } from 'react';
import Decoration from '../assets/Decoration.svg';
import { auth } from "../firebase/firebase";
import {SignUp} from "./SignUp";
import { Link } from "react-router-dom";


export const Login = () => {
    return (
        <div className='login__container'>
            <LoginCard />
        </div>
    )
}

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [password, setPassword] = useState('')
    const [state, dispatch] = useState('');
    const { user } = state;

    const signInUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
               dispatch({
                   type: 'setUser',
                   user: userCredential.user
               })
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    setEmailError('Emai jest nieprawidłowy')
                }
                if (error.code === 'auth/wrong-password') {
                    setPasswordError('Hasło jest nieprawidłowe')
                }
                console.log(error.code)
            })
        .then(() => {
            clearInputs()
        })
        console.log(user)
    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    return (
        <div className='login__card'>
            <h1>Zaloguj się</h1>
            <img src={Decoration} alt='decoration'/>
            <form>
                <div className='login__inputs__wrapper'>
                    <h2>Email
                </h2>
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <p>{emailError}</p>
                    <h2>Hasło
                </h2>
                    <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p>{passwordError}</p>
                </div>
                <div className='login__btns'>
                    <button onClick={signInUser}>Zaloguj</button>
                    <Link to='/register'>Załóż konto</Link>
                </div>
            </form>
        </div>

    )
}