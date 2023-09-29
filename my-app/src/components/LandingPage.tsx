import React, { useLayoutEffect } from 'react';
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postRequesTest, postRequest } from "../services/PostService";

function LandingPage() {

    
    const [inventoryList, setInventoryList] = useState([]);

    useLayoutEffect(()=>{
        postRequesTest(JSON.stringify({'a':'f'}), 'loadInventoryMainPage').then((data)=>{
            setInventoryList(data);
        });
        //square brackets keep from infinate loop. Only do first time.
    }, [] );

    
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
       <h1>Inventory</h1>
       <table> 
        <tbody>
        <tr>
            {inventoryList.map((row, index)=>{
                return <th key = {index}>{row['item_name']}</th>
            })}
        </tr>
        
        {inventoryList.map((row, index)=>{
            return <tr key = {index}><td>Cost: {row['item_cost']}</td><td> Inventory Left {row['inventory']}</td></tr>
        })}
        
        </tbody>
       </table>

      
       </div>

    );
}


export default LandingPage;