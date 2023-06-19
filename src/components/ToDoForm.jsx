import React from 'react'
import { useState } from 'react'


export const ToDoForm = ({addToDo}) => {
//state input
const[value, setValue]=useState("");

//---------------------------------
//Handle change values
const handleChange=(event)=>{
setValue(event.target.value)

}

//-----------handle submit button add todo---------------------

const handleSubmit=(event)=>{
event.preventDefault();
addToDo(value)//you're effectively passing the data to the parent component
setValue("")
}

  return (
    <form action="ToDoForm" onSubmit={handleSubmit}>
      <input type="text" value={value} className='todo-input'placeholder='What is the task today?' onChange={handleChange}/>
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
