import React from 'react';
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../services/PostService";


function LandingPage() {

    const navigate = useNavigate();
    
    return (
       <h1>Placeholder</h1>
    );
}


export default LandingPage;