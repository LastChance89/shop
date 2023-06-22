import React from 'react';

import './Account.css'
import { useState, ChangeEvent } from "react";
import { postRequest } from "../services/PostService";
import Popup from './Modal/PopupModal'
import openModal from './Modal/ModalHook';
import Login from './Login/Login';

function Account() {
    const {isOpen, display} = openModal();
    return (
        <div> 
            <button onClick={display}>Test</button>
            <Popup children={<Login/>}  isOpen = {isOpen} close={display}></Popup>
        </div>
    )
}

export default Account;

