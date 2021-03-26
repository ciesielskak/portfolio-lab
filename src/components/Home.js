import React from 'react';
import { FourSteps } from "./FourSteps";
import { About } from "./About";
import { HomeWelcome } from "./HomeWelcome";
import { Foundations } from "./Foundations";
import {Contact} from "./Contact";


export const Home = () => {
    return (
        <>
            <HomeWelcome />
                <FourSteps />
                  <About />
                  <Foundations />
                  <Contact />
            </>

    )
}



