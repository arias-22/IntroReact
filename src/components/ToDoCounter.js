import React from "react";
import '../cssComponents/TodoCounter.css';
import { ToDoContext } from "../ToDoContext";

function ToDoCounter() {
    const {totalToDos, completedToDos} = React.useContext(ToDoContext);
    return (
        <h2 className="TodoCounter" >Has completado {completedToDos} de {totalToDos} tareas</h2>
    );
}

export {ToDoCounter};