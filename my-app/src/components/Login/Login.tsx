import React from 'react';
//import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { postRequest } from "../../services/PostService";
import './Login.css'


function Login(){
   // const navigate = useNavigate();
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

    
    const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginName(event.currentTarget.value);
    }
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

   
    const buttonClick = () => {
        const data = JSON.stringify({
            username: loginName,
            password: password
        })
        postRequest(data).then((data) => {
            if (data != "") {
                //navigate("/page");
            }
        });
    }


    

    return(
     
        <div className='accountbody'>
            <div className="fields">
                <div> 
                    <input id="userName" placeholder="UserName" onChange={handleLoginChange}></input>
                </div>
                <div> 
                     <input id="password" placeholder="Password" onChange={handlePasswordChange}></input>
                </div>
                <div> 
                    <button onClick={buttonClick}>Login</button>
                </div>

               
            </div>
        </div> 
    )

}

export default Login;