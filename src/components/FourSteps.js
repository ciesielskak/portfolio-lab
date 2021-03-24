import React from 'react';
import Decoration from '../assets/Decoration.svg';
import Reuse from '../assets/reuse.png';
import Search from '../assets/search.png';
import Shirt from '../assets/shirt.png';
import Shop from '../assets/shop.png';

export const FourSteps = () =>{
    return (
        <div className='foursteps__container' id='foursteps'>
            <div className='foursteps__header'>
                Wystarczą 4 kroki
            </div>
            <img src={Decoration} alt='decoration' />
            <div className='foursteps__maincontent'>
                <div className='foursteps__maincontent__column'>
                    <img className='foursteps__img' src={Shirt} alt='shirt' />
                    <h3>Wybierz rzeczy</h3>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className='foursteps__maincontent__column'>
                    <img className='foursteps__img' src={Shop} alt='shop' />
                    <h3>Spakuj je</h3>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className='foursteps__maincontent__column'>
                    <img className='foursteps__img' src={Search} alt='search' />
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className='foursteps__maincontent__column'>
                    <img className='foursteps__img' src={Reuse} alt='reuse' />
                    <h3>Zamów kuriera</h3>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <button>ODDAJ RZECZY</button>

        </div>
    )
}