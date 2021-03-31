import React from 'react';
import {useStateValue} from "../context/StateProvider";


export const FormStepOne = () => {
    const [state, dispatch] = useStateValue();
    const { radio } = state
    return (
        <div className='giveaway__form__stepone'>
            <div className='giveaway__form__stepone__main'>
                <h3>Krok 1/4</h3>
                <div className='giveaway__form__stepone__inputs'>
                <h1>Zaznacz co chcesz oddać:</h1>
                <div className='giveaway__form__stepone__inputWrapper'>
                <input type='radio'
                       checked={radio === 'ubrania, które nadają się do ponownego użycia'}
                       value='ubrania, które nadają się do ponownego użycia'
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                    <p>ubrania, które nadają się do ponownego użycia</p>
                </div>
                <div className='giveaway__form__stepone__inputWrapper'>
                <input type='radio'
                       checked={radio === 'ubrania, do wyrzucenia'}
                       value='ubrania, do wyrzucenia'
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                       <p>ubrania, do wyrzucenia</p>
                </div>
                <div className='giveaway__form__stepone__inputWrapper'>
                <input type='radio'
                       value='zabawki'
                       checked={radio === 'zabawki'}
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                       <p>zabawki</p>
                </div>
                <div className='giveaway__form__stepone__inputWrapper'>
                <input type='radio'
                       value='książki'
                       checked={radio === 'książki'}
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                       <p>książki</p>
                </div>
                <div className='giveaway__form__stepone__inputWrapper'>
                <input type='radio'
                       value='inne'
                       checked={radio === 'inne'}
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                       <p>inne</p>
                </div>
                </div>
                <button>Dalej</button>
            </div>
        </div>
    )
}