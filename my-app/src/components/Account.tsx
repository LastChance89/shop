import React, { useEffect } from 'react';

import './Account.css'
import { useState, ChangeEvent } from "react";
import { postRequest } from "../services/PostService";
import Popup from './Modal/PopupModal'
import openModal from './Modal/ModalHook';
import Login from './Login/Login';




function Account() {
    const { isOpen, display } = openModal();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        display();
        setLoggedIn(true);
    }
    const logout = () => {
        //Probably a better way to do this. 
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('loginName');
        setLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome {localStorage.loginName}</p>
                    <button onClick={logout}>LogOut</button>
                </div>
            )
                : (
                    <div>
                        <button onClick={display}>Login</button>
                        <Popup children={<Login close={handleLoginSuccess} />} isOpen={isOpen} close={display} ></Popup>
                    </div>
                )
            }
        </div>


    )
}


export default Account;

