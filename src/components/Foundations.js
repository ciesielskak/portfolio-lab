import React from 'react';
import Decoration from '../assets/Decoration.svg'
import {useStateValue} from "../context/StateProvider";


export const Foundations = () => {
    const [state, dispatch] = useStateValue();
const { foundations, organizations, locals } = state;

    return (

        <div className='foundations__container' id='foundations'>
            <div className='foundations__header'>
                <h1>Komu pomagamy?</h1>
                <img src={Decoration} alt='decoration' />
                <nav className='foundations__header__nav'>
                    <a href='#foundations' id='foundations' onClick={() => dispatch({type: 'showFoundations'})} >
                        Fundacjom
                    </a>
                    <a href='#organizations' id='organizations' onClick={() => dispatch({type: 'showOrganizations'})} >
                        Organizacjom pozarządowym
                    </a>
                    <a href='#local' id='local' onClick={() => dispatch({type: 'showLocals'})} >
                        Lokalnym zbiórkom
                    </a>
                </nav>
                <span>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </span>
            </div>
            {foundations && <FoundationList />}
            {organizations && <OrganizationsList />}
            {locals && <LocalList />}
        </div>
    )
}



const FoundationList = () => {
    return (
       <div className="foundations__content" id='foundations'>
           <ul className='foundations__content__list'>
                       <li className='foundations__content__list__item'>
                           <div>
                               <h2>Fundacja "Dbam o Zdrowie"</h2>
                               <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                           </div>
                           <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                       </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja “Dla dzieci”</h2>
                       <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                   </div>
                   <span>ubrania, meble, zabawki</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja “Bez domu”</h2>
                       <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                   </div>
                   <span>ubrania, jedzenie, ciepłe koce</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja "Dbam o Zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                   </div>
                   <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja "Dbam o Zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                   </div>
                   <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja "Dbam o Zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                   </div>
                   <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja "Dbam o Zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                   </div>
                   <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja "Dbam o Zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                   </div>
                   <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
               </li>
               <li className='foundations__content__list__item'>
                   <div>
                       <h2>Fundacja "Dbam o Zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                   </div>
                   <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
               </li>


           </ul>

       </div>
    )
}

const OrganizationsList = () => {

    return (
        <div className="foundations__content" id='foundations'>
            <ul className='foundations__content__list'>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>Haha</h2>
                        <p>Hihi</p>
                    </div>
                    <span>Huehue</span>
                </li>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>Huehue</h2>
                        <p>Haha</p>
                    </div>
                    <span>Huhu</span>
                </li>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>BLeble</h2>
                        <p>blablablablalabalbalabalbaa.</p>
                    </div>
                    <span>bleblebleleb</span>
                </li>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>HUahuahuauahua</h2>
                        <p>XDXDXDXDXDXD</p>
                    </div>
                    <span>lalalalalaaa</span>
                </li>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>alalalala</h2>
                        <p>b;ba;baa;a;aa</p>
                    </div>
                    <span>mimimiimimiimi</span>
                </li>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>BLeblebele</h2>
                        <p>lalalalala</p>
                    </div>
                    <span>huehuehuehuehe</span>
                </li>


            </ul>

        </div>
    )
}


const LocalList = () => {
    return (
        <div className="foundations__content" id='foundations'>
            <ul className='foundations__content__list'>
                <li className='foundations__content__list__item'>
                    <div>
                        <h2>Haha</h2>
                        <p>Hihi</p>
                    </div>
                    <span>Huehue</span>
                </li>
            </ul>
        </div>
    )
}