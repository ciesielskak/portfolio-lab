import React from 'react';

import { FormStepOne, FormStepThree, FormStepTwo, FormStepFour } from "./FormStepOne";
import { useStateValue } from "../context/StateProvider";

export const GiveAwayForm = () => {
    const [state, dispatch] = useStateValue();
    const { stepOne, stepTwo, stepThree, stepFour } = state;
    return (
        <div className='giveaway__form'>
            {stepOne && <FormStepOne />}
            {stepTwo && <FormStepTwo />}
            {stepThree && <FormStepThree />}
            {stepFour && <FormStepFour />}

        </div>
    )
}


