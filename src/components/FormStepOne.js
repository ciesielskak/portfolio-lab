import React from 'react';
import {useStateValue} from "../context/StateProvider";


export const FormStepOne = () => {
    const [state, dispatch] = useStateValue();
    const { radio } = state
    return (
        <div className='giveaway__form__stepone'>
            <div className='giveaway__form__stepone__main'>
                <h2>Krok 1/4</h2>
                <h1>Zaznacz co chcesz oddać</h1>
                <input type='radio'
                       checked={radio === 'ubrania, które nadają się do ponownego użycia'}
                       value='ubrania, które nadają się do ponownego użycia'
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                <input type='radio'
                       checked={radio === 'ubrania, do wyrzucenia'}
                       value='ubrania, do wyrzucenia'
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                <input type='radio'
                       value='zabawki'
                       checked={radio === 'zabawki'}
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                <input type='radio'
                       value='książki'
                       checked={radio === 'książki'}
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
                <input type='radio'
                       value='inne'
                       checked={radio === 'inne'}
                       onChange={(e) => dispatch({type: 'setRadio', payload: e.target.value})} />
            </div>
        </div>
    )
}