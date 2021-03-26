import React, { useState } from 'react';
import Decoration from '../assets/Decoration.svg'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";


export const Foundations = () => {
    return (
<BrowserRouter>
        <div className='foundations__container' id='foundations'>
            <div className='foundations__header'>
                <h1>Komu pomagamy?</h1>
                <img src={Decoration} alt='decoration' />
                <nav className='foundations__header__nav'>
                    <Link to='/foundations'>
                        Fundacjom
                    </Link>
                    <Link to='/organizations'>
                        Organizacjom pozarządowym
                    </Link>
                    <Link to='local'>
                        Lokalnym zbiórkom
                    </Link>
                </nav>
                <span>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </span>
            </div>
            <Switch>
            <Route path='/:id'>
                <FoundationContent />
            </Route>
            </Switch>
        </div>
</BrowserRouter>

    )
}
const foundations = [
    {
        name: 'Fundacja “Dbam o Zdrowie"',
        aim: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
        desc: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
        name: 'Fundacja “Dla dzieci”',
        aim: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        desc: 'ubrania, meble, zabawki'
    },
    {
        name: 'Fundacja “Bez domu”',
        aim: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
        desc: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        name: 'Fundacja “Dbam o Zdrowie"',
        aim: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
        desc: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
        name: 'Fundacja “Dla dzieci”',
        aim: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        desc: 'ubrania, meble, zabawki'
    },
    {
        name: 'Fundacja “Bez domu”',
        aim: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
        desc: 'ubrania, jedzenie, ciepłe koce'
    }

]


const FoundationContent = () => {
    const { id } = useParams();


    return (
       <div className="foundations__content">
           <FoundationContentList />
       </div>
    )
}

const FoundationContentList = () => {
    return (
        <ul className='foundations__content__list'>
            {

                        foundations.map((item, index) => (
                            <li key={index} className='foundations__content__list__item'>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.aim}</p>
                                </div>
                                <span>{item.desc}</span>
                            </li>
                        ))

            }
        </ul>

    )
}
