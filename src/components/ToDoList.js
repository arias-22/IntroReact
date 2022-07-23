import React from "react";
import '../cssComponents/TodoList.css'

function ToDoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export {ToDoList}