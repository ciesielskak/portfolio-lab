import React from 'react';
import People from '../assets/People.png';
import Signature from '../assets/Signature.svg';
import Decoration from '../assets/Decoration.svg'


export const About = () => {
    return (
        <div className='about__container' id='about'>
            <div className='about__text'>
                <h1>O nas</h1>
                <img src={Decoration} alt='decoration'/>
                <span>Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek
                    lentil turnip greens parsnip.</span>
                <img className='about__signature' src={Signature} alt='signature'/>
            </div>
            <img className='about__image' src={People} alt='people' />
        </div>
    )
}