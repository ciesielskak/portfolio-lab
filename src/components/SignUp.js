import Decoration from "../assets/Decoration.svg";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {useStateValue} from "../context/StateProvider";
import { Link } from "react-router-dom";

export const SignUp = () => {
    return (
        <div className='login__container'>
            <SignUpCard />
        </div>
    )
}

const SignUpCard = () => {
    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({
        emailError: '',
        passwordError: '',
        unevenError: ''
    })


    const [state, dispatch] = useStateValue();
    const { user } = state;


const clearInputs = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('')
}

const clearErrors = () => {
    setError(prevState => ({
        emailError: '',
        passwordError: '',
        unevenError: ''
    }))
}



    const registerUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError(prevState => ({
                ...prevState,
                unevenError: 'Hasła są różne'
            }))
        }
        if (password.length < 6) {
            setError(prevState => ({
                ...prevState,
                passwordError: 'Hasło musi mieć conajmniej 6 znaków'
            }))
        }
        if (!email.includes('@') || email.includes(" ")) {
            setError(prevState => ({
                ...prevState,
                emailError: 'Email jest nieprawidłowy'
            }))
        }
        else {
            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    dispatch({
                        type: 'setUser',
                        user: userCredential.user
                    })
                })

                .catch(err => {
                    if (err.code === 'auth/email-already-exists') {
                        setInvalidEmail(err.message)
                    }
                })
                .then(() => {
                    clearInputs();

                })
                .then(() => {
                    clearErrors();
                })
console.log(user)
        }

    }

  const authListener = () => {
        auth.onAuthStateChanged(user => {
            if(user) {

                dispatch ({
                    type: 'setUser',
                    user: user
                })
            }
            else {
                dispatch ({
                    type: 'setUser',
                    user: null
                })
            }
        })
    }





    useEffect(() => {
        authListener()
    }, []);


    return (
        <div className='login__card'>
            <h1>Załóż konto</h1>
            <img src={Decoration} alt='decoration'/>
            <form>
                <div className='login__inputs__wrapper'>
                    <h2>Email
                    </h2>
                    <input type='email' value={email}
                           onChange={(e) => setEmail(e.target.value)} name='email'/>
                           <span>{error.emailError}</span>
                    <span>{invalidEmail}</span>
                    <h2>Hasło
                    </h2>
                    <input type='password' value={password}
                           onChange={(e) => setPassword(e.target.value)} name='passwordFirst'/>
                           <span>{error.passwordError}</span>
                    <h2>Powtórz hasło
                    </h2>
                    <input type='password' value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)} name='passwordSecond'/>
                           <span>{error.unevenError}</span>
                </div>
                <div className='login__btns'>
                    <Link to='/login'>Zaloguj</Link>
                    <button onClick={registerUser}>Załóż konto</button>
                </div>
            </form>
        </div>


    )
}