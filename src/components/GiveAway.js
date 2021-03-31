import React from 'react';
import { Contact } from "./Contact";
import { GiveAwayForm } from "./GiveAwayForm";
import { GiveAwayHome } from "./GiveAwayHome";


export const GiveAway = () => {

    return (
        <>
            <GiveAwayHome />
                <GiveAwayForm />
                <Contact />
         </>
    )
}