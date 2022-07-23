import React from "react";
import '../cssComponents/TodoSearch.css';
import { ToDoContext } from "../ToDoContext";

function ToDSearch(){
    const {searchValue, setSearchValue} = React.useContext(ToDoContext)

    const onSearchValueChange = (event)=> {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
        className="TodoSearch" 
        placeholder="Buscar una tarea" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
       
    )
}

export {ToDSearch}