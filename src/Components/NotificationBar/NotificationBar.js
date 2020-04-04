import React, { useState, useEffect } from 'react';
import './NotificationBar.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Login from '../Login'
import configureAuthStore from '../../hooks-store/authentication';
import { useStore } from '../../hooks-store/store';
import { firebaseApp } from "../../Firebase/firebase"

configureAuthStore();

const NotificationBar = () => {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [state, dispatch] = useStore();

    const closeLoginPopupOpen = () => {
        setIsLoginPopupOpen(false);
    }

    useEffect(() => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
            if (user && (state.authentication.user == null || user.uid != state.authentication.user.uid)) {
                dispatch('AUTHENTICATION_LOG_IN', user);
                closeLoginPopupOpen();
            }
        })

        return () => {
            unsubscribe();
        };
    }, [dispatch, closeLoginPopupOpen]);

    const signOut = () => {
        firebaseApp.auth().signOut().then(function () {
            // Sign-out successful.
            dispatch('AUTHENTICATION_LOG_OUT');
        }).catch(function (error) {
            // An error happened.
            console.log("Logout Failure: " + error);
        })
    }

    return (
        <div className="NotificationBar">
            <FaMapMarkerAlt />
            <b className="city">[渥太华]</b>
            <div className="phone">咨询热线：（905）597-8566</div>
            <div className="right-menus">
                {state.authentication.loggedIn ?
                    (
                        <div>
                            <b className="username">Hi! {state.authentication.user.displayName}</b>
                            <a className="coop" onClick={() => signOut()}>
                                Logout
                            </a>
                        </div>
                    ) : (
                        <a className="coop" onClick={() => setIsLoginPopupOpen(true)}>
                            Login
                        </a>
                    )
                }
                <a href="#" className="coop">
                    商业合作
                </a>
                <a href="#" className="privacy">
                    隐私协议
                </a>
                <a href="#" className="language">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIGSURBVHjaYvzoHfzvwwcmFqYfr55wnz7NgAT+//8PJH/9+vVMWJgNyGBg+MPAABBALP8ePeEsLwRKMH9+x8XF9R8Mfn38yPiPgVmA7/+/f6wsrKJZWSzsPP/+/r0/qRcggFgYeDiAZv178/bvu1cQ1X/+/f8ybfq/H3+5q0qYGRlB+m/f/scpwCQlAbQEIIBYGIDyf//9//2H4c8foNzPK9d//vvF/OARw68fX0+fYfn7l93MlOH797+MHP9//gI6CSCAWP79+sXw9+//37////wJ1PBlxkwWHi5Gbv7/rBx/Fy7+/PiB2Nq1/77/ZGD8zvjrJ1ADQACxMPz48e/3n3+/f//79RvkS2X5/+fO/WflYfzyg+njM2Z1jX///v35+Z2JhROoAOgkgABi+vPjx/8/v4E2/Pv5A6iBJynpm7AI0NO/f3/5IiTGX14OFPwNVPPz199fICcBBBDLvy9fwKp/gtC/fwwcHPwNDd/37GJk5xAyN2fk4PgLdPDPn39ZfzH8BnqUASCAWP68fQr2wK9/QLf9+wc0j5GNlcHUhImNg4GdHagaKPjvx/d/bD+Z/vwBOgkggFiAmv79/M0oJMD09zsjOBCBccIuJAJk/WNgYGJiAgqyKioxC4iBvMrAABBAjLeBGsBR+ImBgffKlR8/fsAjGML4/fv3I0dHNrAyIAAIMAAWsTLdMXjAtwAAAABJRU5ErkJggg==" />
                    <span>English</span>
                </a>
            </div>
            {isLoginPopupOpen && <Login close={closeLoginPopupOpen} />}
        </div >
    );
};

export default NotificationBar;
