import React from "react";
import { Link } from "react-router-dom";
import {useStateValue} from "../context/StateProvider";
import { auth } from "../firebase/firebase";

export const NavRouteLinks = () => {
    const [state, dispatch] = useStateValue()
    const {user} = state

    const signOutUser = () => {
        auth.signOut()
            .then(() => {
            dispatch ({
                type: 'setUser',
                user: null
            })
        }).catch((error) => {
            console.log(error.code)
        });

    }
    return (
        <>
            {
                user?
                    <div className='home__navigation__btns'>
                        <p>Cześć</p>
                        <p>{user?.email}</p>
                        <Link to='/giveaway' style={{fontWeight: 600}}>Oddaj rzeczy</Link>
                        <Link to='/logout-successful' onClick={signOutUser}>Wyloguj</Link>
                    </div>

                     :
                    <div className='home__navigation__btns'>
                        <Link to='/login'>Zaloguj</Link>
                        <Link to='/register'>Załóż konto</Link>
                    </div>



                }
                </>



    )
}
