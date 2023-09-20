import React, { useEffect } from 'react';

import './Account.css'
import { useState, ChangeEvent } from "react";
import { postRequest } from "../services/PostService";
import Popup from './Modal/PopupModal'
import openModal from './Modal/ModalHook';
import Login from './Login/Login';
import Cookies from 'js-cookie';


function Account() {

    const { isOpen, display } = openModal();
    const [isLoggedIn, setLoggedIn] = useState(false);

    //This works but I bet there is a better way. 
    useEffect(()=>{
        var token = Cookies.get('token');
        console.log(token)
        let result = false;

        if(token){
            postRequest(JSON.stringify({'token':token}), 'refresh').then((data)=>{
                if(data.hasOwnProperty("token") ){
                    setLoggedIn(true);
                }
                else if (data.hasOwnProperty("error")) {
                    //Will make this more advanced later. 
                    console.log("ERROR!");
                    Cookies.remove('token');
                }
                else{
                    setLoggedIn(false);
                    Cookies.remove('token');
                }
            })
            
        }
        else{
            setLoggedIn(false);
        }
    }, [isLoggedIn])



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

