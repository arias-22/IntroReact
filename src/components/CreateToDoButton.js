import React from "react";
import '../cssComponents/CreateTodoButton.css';

function CreateToDoButton(props){

    const onClickButton = () =>{
       /* if (props.openModal) {
            props.setOpenModal(false);
        }else if(!props.openModal){
            props.setOpenModal(true);
        }*/
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
        className="CreateTodoButton" 
        onClick={onClickButton}
        >+</button>
    )
}

export {CreateToDoButton}