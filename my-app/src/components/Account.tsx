import React, { useEffect } from 'react';

import './Account.css'
import { useState, ChangeEvent } from "react";
import { postRequest } from "../services/PostService";
import Popup from './Modal/PopupModal'
import openModal from './Modal/ModalHook';
import Login from './Login/Login';
import Cookies from 'js-cookie';



function Account() {
    const checkLoginState = () =>{
        if(Cookies.get('token')){
            return true;
        }
        else{
            return false;
        }
    }
    const { isOpen, display } = openModal();
    const [isLoggedIn, setLoggedIn] = useState(checkLoginState());
    const IamLoggedIn = false;
    const handleLoginSuccess = () => {
        display();
        setLoggedIn(true);
    }
    const logout = () => {
        Cookies.remove('token')
        setLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    {/* this changed not work will fix later*/}
                    <p>Welcome {sessionStorage.loginName}</p>
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

