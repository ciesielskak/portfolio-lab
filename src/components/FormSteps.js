import React, { useState } from 'react';
import {useStateValue} from "../context/StateProvider";
import IconShirt from '../assets/Icon.png'
import IconReuse from '../assets/Icon2.png'
import Decoration from '../assets/Decoration.svg'
import { db } from "../firebase/firebase";


export const FormStepOne = () => {
    const [state, dispatch] = useStateValue();
    const { radio } = state
    return (
        <>
        <div className='giveaway__form__important'>
            <div className='giveaway__form__important__card'>
                <h1>Ważne!</h1>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy.
                    Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
        </div>
        <div className='giveaway__form__steps'>
            <div className='giveaway__form__steps__main'>
                <div className='giveaway__form__steps__inputs'>
                    <h3>Krok 1/4</h3>
                    <h1>Zaznacz co chcesz oddać:</h1>
                <div className='giveaway__form__steps__inputWrapper'>
                    <label htmlFor='ubrania' className='radio__label'>
                            <input type='radio'
                                   checked={radio === 'ubrania, które nadają się do ponownego użycia'}
                                   id='ubrania'
                                   className='radio__input'
                                   value='ubrania, które nadają się do ponownego użycia'
                                   onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                        <div className='radio__control'>
                        </div>
                                   ubrania, które nadają się do ponownego użycia
                    </label>
                </div>
                <div className='giveaway__form__steps__inputWrapper'>
                    <label htmlFor='ubraniadowyrzucenia' className='radio__label'>
                        <input type='radio'
                               checked={radio === 'ubrania, do wyrzucenia'}
                               id='ubraniadowyrzucenia'
                               className='radio__input'
                               value='ubrania, do wyrzucenia'
                               onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                        <div className='radio__control'>
                        </div>
                               ubrania, do wyrzucenia
                    </label>
                </div>
                <div className='giveaway__form__steps__inputWrapper'>
                    <label htmlFor='zabawki' className='radio__label'>
                        <input type='radio'
                               value='zabawki'
                               id='zabawki'
                               className='radio__input'
                               checked={radio === 'zabawki'}
                               onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                        <div className='radio__control'>
                        </div>
                        zabawki
                    </label>
                </div>
                <div className='giveaway__form__steps__inputWrapper'>
                    <label htmlFor='ksiazki' className='radio__label'>
                        <input type='radio'
                               value='książki'
                               id='ksiazki'
                               className='radio__input'
                               checked={radio === 'książki'}
                               onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                        <div className='radio__control'>
                        </div>
                               książki
                    </label>
                </div>
                <div className='giveaway__form__steps__inputWrapper'>
                    <label htmlFor='inne' className='radio__label'>
                        <input type='radio'
                               value='inne'
                               className='radio__input'
                               id='inne'
                               checked={radio === 'inne'}
                               onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                    <div className='radio__control'>
                    </div>
                        inne</label>
                </div>
                </div>
                <button onClick={() => dispatch({type: 'showStepTwo'})}>Dalej</button>
            </div>
        </div>

            </>
    )
}


export const FormStepTwo = () => {
    const [state, dispatch] = useStateValue();
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')
    const { selectBag } = state;

    return (
        <>
    <div className='giveaway__form__important'>
        <div className='giveaway__form__important__card'>
            <h1>Ważne!</h1>
            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki.
                Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
        </div>
    </div>
            <div className='giveaway__form__steps'>
                <div className='giveaway__form__steps__main'>
                        <div className='giveaway__form__steps__inputs'>
                            <h3>Krok 2/4</h3>
                            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                            <div className='giveaway__form__steps__select-section'>
                                <h2>Liczba 60l worków:</h2>
                                <div className='giveaway__form__steps__selectBox'>
                                    <p className='giveaway__form__steps__error'>{error}</p>
                                    <select onChange={(e) => dispatch({type: 'selectBags', payload: e.target.value})}>
                                    <option value=''>--wybierz--</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    <div className='giveaway__form__steps__btns'>
                    <button onClick={() => dispatch({type: 'showStepOne'})}>Wstecz</button>
                    {
                        !selectBag? (
                            <button disabled={disabled} onClick={() => {
                                setError('Wybierz wartość!');
                                setDisabled(true)
                            }}>Dalej</button>
                        ) : (
                            <button onClick={() => dispatch({type: 'showStepThree'})}>Dalej</button>
                        )
                    }
                    </div>
                </div>
                </div>
            </>

    )

}

export const FormStepThree = () => {
    const [checkedElderly, setCheckedElderly] = useState(false);
    const [checkedSingleMoms, setCheckedSingleMoms] = useState(false);
    const [checkedHomeless, setCheckedHomeless] = useState(false);
    const [checkedHandicapped, setCheckedHandicapped] = useState(false);
    const [checkedKids, setCheckedKids] = useState(false);
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('');
    const [state, dispatch] = useStateValue();
    const { city, elderly, singleMoms, handicapped, homeless, kids, exactLocalization } = state;
    return (
        <>
            <div className='giveaway__form__important'>
                <div className='giveaway__form__important__card'>
                    <h1>Ważne!</h1>
                    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
            </div>
            <div className='giveaway__form__steps'>
                <div className='giveaway__form__steps__main'>
                    <div className='giveaway__form__steps__inputs'>
                        <h3>Krok 3/4</h3>
                        <h1>
                            Lokalizacja:
                        </h1>
                        <select onChange={(e) => dispatch({type: 'selectCity', payload: e.target.value})}>
                            <option value=''>--wybierz--</option>
                            <option value='Poznań'>Poznań</option>
                            <option value='Kraków'>Kraków</option>
                            <option value='Warszawa'>Warszawa</option>
                            <option value='Katowice'>Katowice</option>
                            <option value='Wrocław'>Wrocław</option>
                        </select>
                        <h2>Komu chcesz pomóc?</h2>
                        <p className='giveaway__form__steps__error'>{error}</p>
                        <div className='giveaway__form__checkbox'>
                                <input type='checkbox'
                                       className='checkbox__input'
                                       value={!checkedKids? 'dzieciom' : ''}
                                       id='kids'
                                       checked={checkedKids}
                                       onChange={(e) => {
                                           setCheckedKids(prevState => !prevState);
                                           dispatch({
                                               type: 'helpKids',
                                               payload: e.target.value
                                           })
                                       }} />
                                <label htmlFor='kids' className='checkbox__label'>dzieciom</label>
                                <input type='checkbox'
                                       id='singlemoms'
                                       checked={checkedSingleMoms}
                                       className='checkbox__input'
                                       value={!checkedSingleMoms ? 'samotnym matkom' : ''}
                                       onChange={(e) => {
                                           setCheckedSingleMoms(prevState => !prevState);
                                           dispatch({
                                               type: 'helpSingleMoms',
                                               payload: e.target.value
                                           })
                                       }}/>
                                <label htmlFor='singlemoms' className='checkbox__label'>samotnym matkom</label>
                                <input type='checkbox'
                                       id='homeless'
                                       checked={checkedHomeless}
                                       className='checkbox__input'
                                       value={!checkedHomeless? 'bezdomnym' : ''}
                                       onChange={(e) => {
                                           setCheckedHomeless(prevState => !prevState);
                                           dispatch({
                                               type: 'helpHomeless',
                                               payload: e.target.value
                                           })
                                       }} />
                                <label htmlFor='homeless' className='checkbox__label'>osobom bezdomnym</label>
                                <input type='checkbox'
                                       id='handicapped'
                                       className='checkbox__input'
                                       checked={checkedHandicapped}
                                       value={!checkedHandicapped? 'niepełnosprawnym' : ''}
                                       onChange={(e) => {
                                           setCheckedHandicapped(prevState => !prevState);
                                           dispatch({
                                               type: 'helpHandicapped',
                                               payload: e.target.value
                                           })
                                       }} />
                                <label htmlFor='handicapped' className='checkbox__label'>niepełnosprawnym</label>
                                <input type='checkbox'
                                       value={!checkedElderly? 'osobom starszym' : '' }
                                       id='elderly'
                                       className='checkbox__input'
                                       checked={checkedElderly}
                            onChange={(e) => {
                                setCheckedElderly(prevState => !prevState);
                                dispatch({
                                type: 'helpElderly',
                                payload: e.target.value
                            })
                            }}/>
                                <label htmlFor='elderly' className='checkbox__label'>osobom starszym</label>
                        </div>
                        <div className='giveaway__form__steps__org'>
                            <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                            <input type='text'
                                   className='input__text'
                                   value={exactLocalization}
                                   onChange={(e) => dispatch({type: 'exactLocalization', payload: e.target.value})}/>
                        </div>
                    </div>
                    <div className='giveaway__form__steps__btns'>
                        <button onClick={() => dispatch({type: 'showStepTwo'})}>Wstecz</button>
                        {
                            checkedElderly && checkedSingleMoms && checkedKids && checkedHomeless && checkedHandicapped === false ? (
                                <button disabled={disabled} onClick={() => {
                                setError('Wybierz przynajmniej jedną opcję!');
                                setDisabled(true)}} />
                            ) : (
                                <button onClick={() => dispatch({type: 'showStepFour'})}>Dalej</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export const FormStepFour = () => {
    const [state, dispatch] = useStateValue();
    const { userStreet, userCity, userPhone, userPostalCode, pickUpDate, pickUpTime, msgToDeliveryGuy } = state;
    const [error, setError] = useState({
        streetErr: '',
        codeErr: '',
        phoneErr: '',
        cityErr: ''
    });

    const validateForm = () => {
        let streetErr = '';
        let codeErr = '';
        let phoneErr = '';
        let cityErr = '';

        if (userStreet.length < 2) {
            streetErr = 'Nazwa musi mieć co najmniej 2 znaki'
        }
        if (userCity.length < 2) {
            cityErr = 'Nazwa musi mieć co najmniej 2 znaki'
        }
        if (userPhone.length !== 9) {
            phoneErr = 'Numer musi mieć 9 znaków'
        }
        if (userPostalCode.length !== 5) {
            codeErr = 'Kod musi mieć 5 znaków'
        }

        if (streetErr || cityErr || phoneErr || codeErr) {
            setError(prevState => ({
                ...prevState,
                phoneErr: phoneErr,
                cityErr: cityErr,
                codeErr: codeErr,
                streetErr: streetErr
            }))
            return false
        }
        return true
    }

    const seeSummary = () => {
        const isValid = validateForm();

        if(isValid) {
            dispatch({
                type: 'showSummary'
            })
        }
    }


    return (
        <>
            <div className='giveaway__form__important'>
                <div className='giveaway__form__important__card'>
                    <h1>Ważne!</h1>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>
            </div>
            <div className='giveaway__form__steps'>
                <div className='giveaway__form__steps__main'>
                    <div className='giveaway__form__steps__inputs'>
                        <h3>Krok 4/4</h3>
                        <h1>
                            Podaj adres oraz termin odbioru rzeczy przez kuriera
                        </h1>
                        <div className='giveaway__form__steps__inputs__last'>
                            <div className='giveaway__form__steps__inputs__last__data'>
                                <h3>Adres odbioru:</h3>
                                <p className='giveaway__form__steps__error'>{error.streetErr}</p>
                                <label>
                                    <p>Ulica</p>
                                    <input type='text'
                                           value={userStreet}
                                           onChange={(e) => dispatch({type: 'setUserStreet', payload: e.target.value})}/>
                                </label>
                                <p className='giveaway__form__steps__error'>{error.cityErr}</p>
                                <label>
                                    <p>Miasto</p>
                                    <input type='text'
                                            value={userCity}
                                            onChange={(e)=> dispatch({type: 'setUserCity', payload: e.target.value})}/>
                                </label>
                                <p className='giveaway__form__steps__error'>{error.codeErr}</p>
                                <label>
                                    <p>Kod pocztowy</p>
                                    <input type='postal'
                                            value={userPostalCode}
                                            onChange={(e) => dispatch({type: 'setUserPostalCode', payload: e.target.value})}/>
                                </label>
                                <p className='giveaway__form__steps__error'>{error.phoneErr}</p>
                                <label>
                                    <p>Numer telefonu</p>
                                    <input type='number'
                                           value={userPhone}
                                           onChange={(e) => dispatch({type: 'setUserPhone', payload: e.target.value})}/>
                                </label>
                            </div>
                            <div className='giveaway__form__steps__inputs__last__data'>
                                <h3>Termin odbioru:</h3>
                                <label>
                                   <p>Data</p>
                                    <input type='date'
                                           value={pickUpDate}
                                           onChange={(e) => dispatch({type: 'setPickUpDate', payload: e.target.value})}/>
                                </label>
                                <label>
                                    <p>Godzina</p>
                                    <input type='time' value={pickUpTime}
                                           onChange={(e) => dispatch({type: 'setPickUpTime', payload: e.target.value})}/>
                                </label>
                                <label>
                                    <p>Uwagi dla kuriera</p>
                                    <input type='textarea'
                                           value={msgToDeliveryGuy}
                                           onChange={(e) => dispatch({type: 'setMsgToDeliveryGuy', payload: e.target.value})}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='giveaway__form__steps__btns'>
                        <button onClick={() => dispatch({type:'showStepThree'})}>Wstecz</button>
                       <button onClick={seeSummary}>Dalej</button>
                    </div>
                </div>
            </div>
            </>

    )
}



export const Summary = () => {
    const [state, dispatch] = useStateValue();
    const [sent, setSent] = useState(false)
    const { user, radio, selectBag, city, kids, elderly, singleMoms, handicapped, homeless, exactLocalization, userStreet, userCity, userPhone,
    userPostalCode, pickUpDate, pickUpTime, msgToDeliveryGuy} = state;

    const sendForm = () => {
        db.collection('giveaway')
            .add({
                user: user.email,
                typeOfThings: radio,
                bagsCount: selectBag,
                city: city,
                helpFor: kids + elderly + singleMoms + handicapped + homeless,
                exactLocalization: exactLocalization,
                userStreet: userStreet,
                userCity: userCity,
                userPhone: userPhone,
                userPostalCode: userPostalCode,
                pickUpDate: pickUpDate,
                pickUpTime: pickUpTime,
                msgToDeliveryGuy: msgToDeliveryGuy,
            })
        setSent(true)

    }

    return (
        <>
        {
            sent? (
                <div className='giveaway__form__steps'>
                    <div className='giveaway__form__steps__successful'>                        
                        <h1>Dziękujemy za przesłanie formularza
                            Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                        <img src={Decoration} alt='decoration' />                       
                    </div>
                </div>
            ) : (
                <div className='giveaway__form__steps'>
                    <div className='giveaway__form__steps__main'>
                        <div className='giveaway__form__steps__inputs'>
                            <h1>Podsumowanie Twojej darowizny</h1>
                            <h2>Oddajesz:</h2>
                            <div className='giveaway__form__steps__inputs__summary'>
                                <img src={IconShirt} alt='shirt' />
                                <p>{selectBag} worki, {radio}{kids && `, ${kids}`}{elderly && `, ${elderly}`}
                                    {homeless && `, ${homeless}`}{singleMoms&& `, ${singleMoms}`}{handicapped && `, ${handicapped}`}</p>
                            </div>
                            <div className='giveaway__form__steps__inputs__summary'>
                                <img src={IconReuse} alt='reuse' />
                                <p>Dla lokalizacji: {city}</p>
                            </div>
                            <div className='giveaway__form__steps__inputs__summary__address_pickup'>
                                <div className='giveaway__form__steps__inputs__summary__address'>
                                    <h2>
                                        Adres odbioru:
                                    </h2>
                                    <div className='giveaway__form__steps__inputs__summary__address__details'>
                                        <p>Ulica</p>
                                        <span>{userStreet}</span>
                                    </div>
                                    <div className='giveaway__form__steps__inputs__summary__address__details'>
                                        <p>Miasto</p>
                                        <span>{userCity}</span>
                                    </div>
                                    <div className='giveaway__form__steps__inputs__summary__address__details'>
                                        <p>Kod pocztowy</p>
                                        <span>{userPostalCode}</span>
                                    </div>
                                    <div className='giveaway__form__steps__inputs__summary__address__details'>
                                        <p>Numer telefonu</p>
                                        <span>{userPhone}</span>
                                    </div>
                                </div>
                                <div className='giveaway__form__steps__inputs__summary__pickup'>
                                    <h2>
                                        Termin odbioru:
                                    </h2>
                                    <div className='giveaway__form__steps__inputs__summary__pickup__details'>
                                        <p>Data</p>
                                        <span>{pickUpDate}</span>
                                    </div>
                                    <div className='giveaway__form__steps__inputs__summary__pickup__details'>
                                        <p>Godzina</p>
                                        <span>{pickUpTime}</span>
                                    </div>
                                    <div className='giveaway__form__steps__inputs__summary__pickup__details'>
                                        <p>Uwagi dla kuriera</p>
                                        <span>{msgToDeliveryGuy}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='giveaway__form__steps__btns'>
                            <button onClick={() => dispatch({type: 'showStepFour'})}>Wstecz</button>
                            <button onClick={sendForm}>Potwierdzam</button>
                        </div>
                    </div>
                </div>
            )
        }
          </>

    )
}