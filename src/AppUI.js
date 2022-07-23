import React from "react";

import { ToDoContext } from "./ToDoContext";

import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDSearch } from "./components/ToDoSearh";
import { ToDoList } from "./components/ToDoList";
import { Modal } from "./components/Modal";
import { ToDoForm } from "./components/ToDoForm";


function AppUI (){

  const {
    error, 
    loading,
    searchedToDos, 
    completeToDo, 
    deleteToDo,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

return (
    <React.Fragment>
    <ToDoCounter/>
    
    <ToDSearch />

    <ToDoList>

      {error && <center style={{ marginTop: '3rem' }} >Error...</center>}
      {loading && <center style={{ marginTop: '3rem' }} >Cargando...</center>}
      {!loading && !searchedToDos.length && <center style={{ marginTop: '3rem' }} >No hay tareas</center>}

      {searchedToDos.map(toDo => (
        <ToDoItem
          key={toDo.text}
          text={toDo.text}
          completed={toDo.completed}
          onComplete={() => completeToDo(toDo.text)}
          onDelete={() => deleteToDo(toDo.text)}
        />
      ))}
    </ToDoList>
       {!!openModal && (
         <Modal>
         <ToDoForm/>
       </Modal>
       )}
    <CreateToDoButton 
      setOpenModal={setOpenModal}
      openModal={openModal}
    />
   </React.Fragment>
);
}

export {AppUI};