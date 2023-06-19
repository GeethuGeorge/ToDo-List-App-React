import React, { useEffect } from 'react'
import { ToDoForm } from './ToDoForm'
import { Todo } from './Todo';
import { useState } from 'react'
import {v4 as uuidv4} from'uuid';
import { EditToDoForm } from './EditToDoForm';
uuidv4();

export const ToDoWrapper = () => {

  const[todos, setTodos]=useState([])
  //we created todos here since all child needs them
  //how to pass values from form to wrap-use props

  //--------------------

  const addToDo=todo=>{
     setTodos([...todos, {id: uuidv4(), task: todo, completed:false, isEditing:false}])
  }
  console.log(todos)
  
 //-------------to strike off-------
 const toggleComplete=(id)=>{
   setTodos(todos.map((todo)=>(
    todo.id === id ?
    {...todo, completed : !todo.completed}
    : todo
   )))
 }
// ----------------to delete-------
  const deleteToDo=(id)=>{

    setTodos(todos.filter((todo)=>(
      todo.id !== id
    ))
    )
  }

 //-----------edit item----------
 
 const editToDo=(id)=>{
setTodos(todos.map((todo)=>(
  todo.id === id ?
  {...todo, isEditing:!todo.isEditing}
  : todo
  )))
 }

 //---------------------------

 const editTask=(task, id)=>{
setTodos(todos.map((todo=>
  todo.id === id ?
  {...todo, task, isEditing : !todo.isEditing}
  : todo
  )))
 }

   // Retrieve existing todos from local storage on component mount
 useEffect(() => {
  const storedTodos = localStorage.getItem('todos');
  console.log(storedTodos)//as strings
  if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
  }
}, []);


   // Save todos to local storage whenever there's a change
   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  return (
    <div className='todo-wrapper'>
      <h1>Get things Done !</h1>
      <ToDoForm addToDo={addToDo}/>

      {todos.map((todo, index)=>(

       todo.isEditing ? 
        (<EditToDoForm editTask={editTask} todo={todo}/>) 
        :
        (<Todo todo={todo} key={index} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo}/>)
       
        ))
      }

    </div>
  )
}
