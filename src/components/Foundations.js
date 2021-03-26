import React, { useState, useEffect } from 'react';
import Decoration from '../assets/Decoration.svg'
import {useStateValue} from "../context/StateProvider";
import { db } from "../firebase/firebase";


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
    const [foundations, setFoundations] = useState([]);

    useEffect(() => {
        db.collection('lists')
            .doc('XSd9E9WkBtwYaXdxsxim')
            .collection('topics')
            .orderBy('name', "asc")
            .onSnapshot(snapshot => (
                setFoundations(
                    snapshot.docs.map(doc => ({
                        name: doc.data().name,
                        aim: doc.data().aim,
                        desc: doc.data().desc
                    }))
                )
            ))


    }, [])

    return (
       <div className="foundations__content" id='foundations'>
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

       </div>
    )
}

const OrganizationsList = () => {
const [organizations, setOrganizations] = useState([])

    useEffect(() => {
        db.collection('lists')
            .doc('fyNsqYqE3QG1CHsixtac')
            .collection('topics')
            .orderBy('name', "asc")
            .onSnapshot(snapshot => (
                setOrganizations(
                    snapshot.docs.map(doc => ({
                        name: doc.data().name,
                        aim: doc.data().aim,
                        desc: doc.data().desc
                    }))
                )
            ))


    }, [])
    return (
        <div className="foundations__content" id='foundations'>
            <ul className='foundations__content__list'>
                {
                    organizations.map((item, index) => (
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

        </div>
    )
}


const LocalList = () => {
    const [local, setLocal] = useState([])
    useEffect(() => {
        db.collection('lists')
            .doc('fj8kTxDJugTkwXL4uzi7')
            .collection('topics')
            .orderBy('name', "asc")
            .onSnapshot(snapshot => (
                setLocal(
                    snapshot.docs.map(doc => ({
                        name: doc.data().name,
                        aim: doc.data().aim,
                        desc: doc.data().desc
                    }))
                )
            ))


    }, [])
    return (
        <div className="foundations__content" id='foundations'>
            <ul className='foundations__content__list'>
                {
                    local.map((item, index) => (
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
        </div>
    )
}