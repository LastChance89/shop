import {useState} from "react";

function useModal(){
    const [isOpen, setOpen] = useState(false);
    const display = () =>{
        setOpen(!isOpen);
    }
    return {
        isOpen, display
    }
}

export default useModal;