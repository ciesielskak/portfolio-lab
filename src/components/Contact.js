import React from 'react';
import Decoration from '../assets/Decoration.svg';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png'

export const Contact = () => {
    return (
        <div className='contact__container' id='contact'>
            <form className='contact__form'>
                <div className='contact__form__header'>
                    <h1>Skontaktuj się z nami
                        </h1>
                    <img src={Decoration} alt='decoration' />
                </div>
                <div className='contact__form__inputWrapper'>
                <div className='contact__form__inputs'>
                    <h2>Wpisz swoje imię</h2>
                    <input type='name'/>
                </div>
                <div className='contact__form__inputs'>
                    <h2>Wpisz swój e-mail</h2>
                    <input type='email'/>
                </div>
                </div>
                <div className='contact__form__textarea'>
                    <h2>Wpisz swoją wiadomość</h2>
                    <textarea/>
                </div>
                <button type='submit'>Wyślij</button>


            </form>
            <footer className='contact__footer'>
                <div className='contact__footer__title'>
                    Copyright by Coders Lab
                </div>
                <div className='contact__footer__images'>
                    <img src={Facebook} alt='facebook' />
                    <img src={Instagram} alt='instagram' />
                </div>
            </footer>
        </div>
    )
}