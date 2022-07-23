import React from "react";
import { ToDoContext } from "../ToDoContext";
import '../cssComponents/ToDoForm.css'

function ToDoForm(){

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);

    const onCancel = () =>{
        setOpenModal(false);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        addToDo(newToDoValue);

        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }
    return (
        <form onSubmit={onsubmit}>
            <label>Agregar nueva tarea</label>
                <textarea
                placeholder="Escribe una tarea"
                value={newToDoValue}
                onChange={onChange}
                />
            <div className="TodoForm-buttonContainer">
                <button
                onClick={onCancel}
                type="button"
                className="TodoForm-button TodoForm--cancel"
                >
                    Cancelar
                </button>
                <button
                onClick={onSubmit}
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Agragar
                </button>
            </div>
        </form>
    )
}

export {ToDoForm};