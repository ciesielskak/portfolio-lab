import React from 'react';
import { FourSteps } from "./FourSteps";
import { About } from "./About";
import { HomeWelcome } from "./HomeWelcome";


export const Home = () => {
    return (
        <>
            <HomeWelcome />
                <FourSteps />
                  <About />
            </>

    )
}



