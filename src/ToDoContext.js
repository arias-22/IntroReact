import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider(props){

    const {
        item: toDos, 
        saveItem: saveToDo,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue, setSearchValue] = React.useState('') ; 
      
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
      const totalToDos = toDos.length;
    
      let searchedToDos = [];
    
      if (!searchValue.length >= 1 ) {
        searchedToDos = toDos;
      }else{
        searchedToDos = toDos.filter(toDo => {
          const toDoText = toDo.text.toLowerCase();
          const searchToDoText = searchValue.toLowerCase();
          return toDoText.includes(searchToDoText); 
        });
    
      }
    
      const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
          completed: false,
          text,
        });
        saveToDo(newToDos);
      }

      const completeToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newToDos = [...toDos];
        if (newToDos[toDoIndex].completed == false) {
          newToDos[toDoIndex].completed = true;
        }else{
          newToDos[toDoIndex].completed = false;
        }
        saveToDo(newToDos);
      }
    
      const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newToDos = [...toDos];
        
        newToDos.splice(toDoIndex, 1);
        
        saveToDo(newToDos);
        
      }

    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </ToDoContext.Provider>
    );

}

export {
    ToDoContext,
    ToDoProvider,
}