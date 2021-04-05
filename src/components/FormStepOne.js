import React from 'react';
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
                <h3>Krok 1/4</h3>
                <div className='giveaway__form__steps__inputs'>
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
                <button>Dalej</button>
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
                    <h3>Krok 2/4</h3>
                        <div className='giveaway__form__steps__inputs'>
                            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                            <div className='giveaway__form__steps__select-section'>
                                <h2>Liczba 60l worków:</h2>
                                <div className='giveaway__form__steps__selectBox'>
                                    <select onChange={(e) => dispatch({type: 'selectBags', payload: e.target.value})}>
                                    <option value={null}>--wybierz--</option>
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
                    <button>Wstecz</button>
                    {
                        !selectBag? (
                            <button disabled={true}>Dalej</button>
                        ) : (
                            <button>Dalej</button>
                        )
                    }
                    </div>
                </div>
                </div>
            </>

    )

}