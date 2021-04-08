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
                                <label>
                                    <p>Ulica</p>
                                    <input type='text' />
                                </label>
                                <label>
                                    <p>Miasto</p>
                                    <input type='text' />
                                </label>
                                <label>
                                    <p>Kod pocztowy</p>
                                    <input type='postal' />
                                </label>
                                <label>
                                    <p>Numer telefonu</p>
                                    <input type='number' />
                                </label>
                            </div>
                            <div className='giveaway__form__steps__inputs__last__data'>
                                <h3>Termin odbioru:</h3>
                                <label>
                                   <p>Data</p>
                                    <input type='date' />
                                </label>
                                <label>
                                    <p>Godzina</p>
                                    <input type='time' />
                                </label>
                                <label>
                                    <p>Uwagi dla kuriera</p>
                                    <input type='textarea' />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='giveaway__form__steps__btns'>
                        <button onClick={() => dispatch()}>Wstecz</button>
                       <button>Dalej</button>
                    </div>
                </div>
            </div>
            </>

    )
}