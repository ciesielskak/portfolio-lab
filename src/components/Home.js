import React from 'react';
import { FourSteps } from "./FourSteps";
import { About } from "./About";
import { HomeWelcome } from "./HomeWelcome";
import { Foundations } from "./Foundations";
import {Contact} from "./Contact";
import {HomeThreeColumns} from "./HomeThreeColumns";


export const Home = () => {
    return (
        <>
            <HomeWelcome />
            <HomeThreeColumns />
                <FourSteps />
                  <About />
                  <Foundations />
                  <Contact />
            </>

    )
}



