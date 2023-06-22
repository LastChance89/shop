import React, { Component, ReactNode } from "react";
import './PopupModal.css'
interface ModalType {
    children: ReactNode;
    isOpen: boolean;
    close: ()=> any;
}


function Popup(props: ModalType) {
    return (
        <div > 
        { props.isOpen &&
             <div className="modal-overlay">
                <div className="modal-box"> 
                <button className="close-modal" onClick={props.close}>X</button>
                    {props.children}
                </div>
             </div>

        }
        </div>

    )
}

export default Popup