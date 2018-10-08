import React from 'react'; 
import Task from "../Task/Task";
import "./ToDoList.css"; 

const ToDoList = ({tasks}) => <div className="ToDoList" > 

{tasks.map(taskText => <Task 
    key={taskText.slice(0,10)}
     text={taskText}/>
)} 
</div> 
export default ToDoList; 