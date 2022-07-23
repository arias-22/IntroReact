import React from "react";
import '../cssComponents/TodoItem.css';

function ToDoItem(props) {

    const onComplete = () => {
        alert("Completaste " + props.text)
    }

    const onDelete = () => {
        alert("Borraste " + props.text)
    }

    return(
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
                {props.text}
            </p>
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export {ToDoItem};