import React, { useEffect, useState } from 'react';
import Decoration from '../assets/Decoration.svg';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png'



export const Contact = () => {
    const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
});

    const [error, setError] = useState({
    nameError: '',
    emailError: '',
    messageError: ''
})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const validateForm = () => {
      let nameError = '';
      let emailError = '';
      let messageError = '';

      if (form.name.includes(" ")) {
          nameError = 'Podane imię jest niepoprawne!'
      }
      if (!form.email.includes('@')) {
          emailError = 'Podany e-mail jest niepoprwany!'
      }
      if (form.message.length < 120) {
          messageError = 'Wiadomość musi mieć conajmniej 120 znaków!'
      }
      if (nameError || emailError || messageError) {
          setError(prevState => ({
              ...prevState,
                 nameError: nameError,
                emailError: emailError,
                messageError: messageError
          }))
          return false
      }
      return true
    }

   const sendForm = (e) => {
        e.preventDefault();
       const API = "http://localhost:3000";

       const data = {
           name: "Ania",
           brand: "FSO"
       };
       const isValid = validateForm();
       if (isValid) {
           fetch(`${API}/cars`, {
               method: "POST",
               body: JSON.stringify(data),
               headers: {
                   "Content-Type": "application/json"
               }
           })
               .then(response => response.json())
               .then(data => {
                   console.log(data);
               })
               .catch(error => {
                   console.log(error);
               });
       }
    }
    return (
        <div className='contact__container' id='contact'>
            <form onSubmit={sendForm} className='contact__form'>
                <div className='contact__form__header'>
                    <h1>Skontaktuj się z nami
                        </h1>
                    <img src={Decoration} alt='decoration' />
                </div>
                <div className='contact__form__inputWrapper'>
                <div className='contact__form__inputs'>
                    <h2>Wpisz swoje imię</h2>
                    <h2>{error.nameError}</h2>
                    <input type='name' name='name' value={form.name} onChange={inputHandler}/>
                </div>
                <div className='contact__form__inputs'>
                    <h2>Wpisz swój e-mail</h2>
                    <h2 style={{color: 'red'}}>{error.emailError}</h2>
                    <input type='email' name='email' value={form.email} onChange={inputHandler}/>
                </div>
                </div>
                <div className='contact__form__textarea'>
                    <h2>Wpisz swoją wiadomość</h2>
                    {error.messageError}
                    <textarea name='message' value={form.message} onChange={inputHandler}/>
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