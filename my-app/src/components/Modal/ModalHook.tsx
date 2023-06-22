import {useState} from "react";

function useModal(){
    const [isOpen, setIsOpen] = useState(false);
    const display = () =>{
        console.log("BANG!")
        setIsOpen(!isOpen);
    }
    return {
        isOpen, display
    }
}

export default useModal;