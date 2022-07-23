import React from "react";
import { ToDoProvider } from "./ToDoContext";
import { AppUI } from "./AppUI";

/*const defaultToDos = [
  {text: 'Programar', completed: true},
  {text: 'Hacer la tarea', completed: false},
  {text: 'Estudiar', completed: false},
  {text: 'Dormir', completed: false},
]*/

function App() {
  return (
  <ToDoProvider>
    <AppUI/>
  </ToDoProvider>
  );
}

export default App;
