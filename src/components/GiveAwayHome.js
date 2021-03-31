import React from 'react';
import Decoration from '../assets/Decoration.svg'

export const GiveAwayHome = () => {
    return (
        <div className='giveaway__home__container'>
            <div className='giveaway__home__background'>
            </div>
            <div className='giveaway__home__info'>
                <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                <img src={Decoration} alt='decoration' />
                <p>Wystarczą 4 proste kroki:</p>
                <div className='giveaway__home__info__steps'>
                    <div>
                        <span>1</span>
                        <span>Wybierz rzeczy</span>
                    </div>
                    <div>
                        <span>2</span>
                        <span>Spakuj je w worki</span>
                    </div>
                    <div>
                        <span>3</span>
                        <span>Wybierz fundację</span>
                    </div>
                    <div>
                        <span>4</span>
                        <span>Zamów kuriera</span>
                    </div>
                </div>
            </div>
        </div>
    )
}