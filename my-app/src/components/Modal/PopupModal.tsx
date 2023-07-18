import React, { Component, ReactElement, ReactNode } from "react";
import './PopupModal.css'
interface ModalType {
    children: ReactElement;
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
                    {React.cloneElement(props.children)}
                </div>
             </div>

        }
        </div>

    )
}

export default Popup