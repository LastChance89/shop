import React from 'react';
//import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { postRequestLogin } from "../../services/PostService";
import './Login.css'
import Cookies from 'js-cookie';
interface LoginPage {
    close: ()=> any;
}


function Login(props: LoginPage){
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
        postRequestLogin(data).then((data) => {
            if (data != "") {
                sessionStorage.setItem('loginName',loginName);
                Cookies.set('token',data.token,{'SameSite':'lax'});
                props.close()
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