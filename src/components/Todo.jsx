import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



export const Todo = ({todo, toggleComplete, deleteToDo, editToDo}) => {
    return (
        <div className="todo">
            <p onClick={()=>toggleComplete(todo.id)} className={todo.completed ? 'completed': ""}>{todo.task}</p>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{editToDo(todo.id)}}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>deleteToDo(todo.id)} />
        </div>
       </div>
    );
};
