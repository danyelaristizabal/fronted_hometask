import React from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
import "./app.css"; 


const list = [

"First Thing to do", 
"Second Thing to do", 
"Third Thing to do", 
"The last one"

]

const App = () => <ToDoList tasks={list}/>;
export default App; 
