import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        
        <br /><h3 className="app-heading">ToDo List in React By Ravindra Singh</h3><hr/>
        <br />
        <h3 className="app-heading">~ Your Task List Will Appear Below ~</h3><hr/>
        
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App