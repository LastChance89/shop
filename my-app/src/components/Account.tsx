import React, { useEffect } from 'react';

import './Account.css'
import { useState, ChangeEvent } from "react";
import { postRequest } from "../services/PostService";
import Popup from './Modal/PopupModal'
import openModal from './Modal/ModalHook';
import Login from './Login/Login';




function Account() {
    const {isOpen, display} = openModal();

    const handleLoginSuccess = () =>{
        display();
        //@TODO: will impliment a setup to replace the login button with logout / other  information. 
    }


    return (
        <div> 
            <button onClick={display}>Login</button>
            <Popup children={<Login close={handleLoginSuccess}/>}  isOpen = {isOpen} close={display} ></Popup>
        </div>
    )
}

export default Account;

