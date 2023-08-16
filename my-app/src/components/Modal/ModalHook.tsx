import {useState} from "react";

function UseModal(){
    const [isOpen, setOpen] = useState(false);
    const display = () =>{
        setOpen(!isOpen);
    }
    return {
        isOpen, display
    }
}

export default UseModal;