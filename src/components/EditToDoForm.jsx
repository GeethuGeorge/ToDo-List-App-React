import React from 'react'
import { useState } from 'react'


export const EditToDoForm = ({editTask, todo}) => {
//state input
const[value, setValue]=useState(todo.task);
console.log(value)
//---------------------------------
//Handle change values
const handleChange=(event)=>{
setValue(event.target.value)
}

//-----------handle submit button add todo---------------------

const handleSubmit=(event)=>{
event.preventDefault();
editTask(value, todo.id)//you're effectively passing the data to the parent component
setValue("")
}

  return (
    <form action="ToDoForm" onSubmit={handleSubmit}>
      <input type="text" value={value} className='todo-input'placeholder='Update Task' onChange={handleChange}/>
      <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}
