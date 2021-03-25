import React from "react";
import { HomeMainInfo } from "./HomeMainInfo";
import {HomeThreeColumns} from "./HomeThreeColumns";
import Things from '../assets/Hero Image.png'
import {HomeHeader} from "./HomeHeader";


export const HomeWelcome = () => {
    return (
        <div className='home__container' id='home'>
            <div className='home__mainImage'>
            </div>
            <HomeThreeColumns />
            <HomeMainInfo />
        </div>
    )
}