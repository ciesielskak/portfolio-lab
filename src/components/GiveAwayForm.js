import React from 'react';
import { ImportantInfo } from "./ImportantInfo";
import { FormStepOne } from "./FormStepOne";

export const GiveAwayForm = () => {
    return (
        <div className='giveaway__form'>
            <ImportantInfo />
            <FormStepOne />
        </div>
    )
}