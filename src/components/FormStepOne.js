import React, { useState } from 'react';
import {useStateValue} from "../context/StateProvider";



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
                            <button disabled={true}>Dalej</button>
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
    const [checked, setChecked] = useState(false)
    const [state, dispatch] = useStateValue();
    const { city, elderly, singleMoms, handicapped, homeless, kids } = state;
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
                        <div className='giveaway__form__checkbox'>
                                <input type='checkbox'
                                       className='checkbox__input'
                                       value='kids'
                                       id='kids'
                                       onChange={(e) => dispatch({type: 'helpKids', payload: e.target.value})} />
                                <label htmlFor='kids' className='checkbox__label'>dzieciom</label>
                                <input type='checkbox'
                                       id='singlemoms'
                                       className='checkbox__input'
                                       value='samotnym matkom'
                                       onChange={(e) => dispatch({type:'helpSingleMoms', singleMoms: e.target.value})} />
                                <label htmlFor='singlemoms' className='checkbox__label'>samotnym matkom</label>
                                <input type='checkbox'
                                       id='homeless'
                                       className='checkbox__input'
                                       value='bezdomnym'
                                       onChange={(e) => dispatch({type: 'helpHomeless', payload: e.target.value})} />
                                <label htmlFor='homeless' className='checkbox__label'>osobom bezdomnym</label>
                                <input type='checkbox'
                                       id='handicapped'
                                       className='checkbox__input'
                                       value='niepełnosprawnym'
                                       onChange={(e) => dispatch({type: 'helpHandicapped', payload: e.target.value})} />
                                <label htmlFor='handicapped' className='checkbox__label'>niepełnosprawnym</label>
                                <input type='checkbox'
                                       value='osobom starszym'
                                       id='elderly'
                                       checked={checked}
                                       className='checkbox__input'
                                       onChange={(e) => {
                                           setChecked(prevState => !prevState);
                                       }}/>
                            <label htmlFor='elderly' className='checkbox__label'>osobom starszym</label>
                        </div>
                        <div className='giveaway__form__steps__org'>
                            <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                            <input type='text' className='input__text'/>
                        </div>
                    </div>
                    <div className='giveaway__form__steps__btns'>
                        <button onClick={() => dispatch({type: 'showStepTwo'})}>Wstecz</button>
                        <button>Dalej</button>
                    </div>
                </div>
            </div>
        </>
    )
}