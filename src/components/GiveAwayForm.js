import React from 'react';

import {FormStepOne, FormStepThree} from "./FormStepOne";
import { FormStepTwo } from "./FormStepOne";
import {useStateValue} from "../context/StateProvider";

export const GiveAwayForm = () => {
    const [state, dispatch] = useStateValue();
    const { stepOne, stepTwo, stepThree } = state;
    return (
        <div className='giveaway__form'>
            {stepOne && <FormStepOne />}
            {stepTwo && <FormStepTwo />}
            {stepThree && <FormStepThree />}
        </div>
    )
}


