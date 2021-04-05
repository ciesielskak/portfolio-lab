import React from 'react';

import { FormStepOne } from "./FormStepOne";
import { FormStepTwo } from "./FormStepOne";

export const GiveAwayForm = () => {
    return (
        <div className='giveaway__form'>
            <FormStepOne />
            <FormStepTwo />
        </div>
    )
}


