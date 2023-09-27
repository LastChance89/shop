import React, { useLayoutEffect } from 'react';
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postRequesTest, postRequest } from "../services/PostService";

function LandingPage() {

    
    var inventoryList;

    useLayoutEffect(()=>{
        postRequesTest(JSON.stringify({'a':'f'}), 'loadInventoryMainPage').then((data)=>{
            inventoryList = data;
        });
    });

    
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
            {<th>Col1</th>}
        </tr>
        <tr>
            <td> Item 1
                <div> 
                <button onClick={buttonClick}>Add to Cart</button>
                </div>

            </td>
        </tr>
        </tbody>
       </table>

      
       </div>

    );
}


export default LandingPage;