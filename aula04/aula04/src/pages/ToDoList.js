import React, { useState } from 'react';
import './ToDoList.css'

const ListItem = ({toDoItem, toggleDone}) => {
    console.log(toDoItem);
    return (
        <div 
            style={toDoItem.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
            onClick={() => toggleDone(toDoItem)}
        >
            {toDoItem.name}
        </div>
    );
}

const ToDoList = ({ pageTitle }) => {

    const [toDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    const onInputChange = (event) => {
        setInputValue(event.target.value);

    }

    const onClickAddTask = (event) => {
        console.log(inputValue);
        if(!inputValue) return;
        
        setToDoList([...toDoList, {name: inputValue, done: false}]);
        setInputValue('');
        
    }

    const toggleDone = (item) => {
        const updatedList = toDoList.map((toDoItem) => {
            if (toDoItem === item) {
                return { ...toDoItem, done: !toDoItem.done };
            }
            return toDoItem;
        });
        setToDoList(updatedList);
    }

    return (
        <div>
            <div className="header">
                <h1>{pageTitle}</h1>
            </div>
            <div className="container">
                <label for="taskText">Digite sua tarefa </label>
                <input id="taskText" name="taskText" value={inputValue} onChange={onInputChange}/>
                <button onClick={onClickAddTask}>Adicionar</button>
            </div>
            <div >
            {toDoList.map((toDoItem) => (<ListItem toDoItem={toDoItem} toggleDone={toggleDone}/>))}
            </div>
        </div>
    );
}

export default ToDoList;