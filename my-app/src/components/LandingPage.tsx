import React, { useLayoutEffect } from 'react';
import { useState, ChangeEvent } from "react";

import './LandingPage.css'
import { useNavigate } from "react-router-dom";
import { postRequesTest, postRequest } from "../services/PostService";

function LandingPage() {


    const [inventoryList, setInventoryList] = useState([]);

    useLayoutEffect(() => {
        postRequesTest(JSON.stringify({ 'a': 'f' }), 'loadInventoryMainPage').then((data) => {
            setInventoryList(data);
        });
        //square brackets keep from infinate loop. Only do first time.
    }, []);


    const buttonClick = () => {

        const data = JSON.stringify({
            username: 'b',
            password: 'a'
        })

        postRequest(data, 'test').then((data) => {
            console.log("TEst")
        })
    }


    return (

        <div className="itemPage">
            <h1>Inventory</h1>
            <span >  {inventoryList.map((row, index) => {
                return <div className='items'>  <h2 >{row['item_name']}</h2> <p>Cost: {row['item_cost']}</p>
                    <p>Number in stock: {row['inventory']} </p> 
                    <button>Add to Cart</button>
                    </div>

            })} </span>
        </div>
            );
}


export default LandingPage;