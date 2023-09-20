import React from 'react';
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../services/PostService";

function LandingPage() {

    const navigate = useNavigate();
    
    const buttonClick = () => {

        const data = JSON.stringify({
            username: 'b',
            password: 'a'
        })

        postRequest(data, 'test').then((data)=>{
            console.log("TEst")
        })
    }


    return (
       <div>
       <h1>Placeholder</h1>

       <button onClick={buttonClick}>test</button>
       </div>

    );
}


export default LandingPage;