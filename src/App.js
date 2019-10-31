import React, { useState } from 'react'
import "./App.css"

function Todo({todo,index,completeTodo,openTodo,removeTodo}){
  return <div style={{textDecoration: todo.completed ? "line-through" : ""}} 
  className="todo">
  {todo.text}
  <div>
    <button onClick={()=> completeTodo(index)}>Complete</button>
    <button onClick={()=> openTodo(index)}>Open</button>
    <button onClick={()=> removeTodo(index)}>Remove</button>    
  </div>
  </div>
}

function TodoForm({addTodo}){
  const [value,setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return;
    addTodo(value)
    setValue("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      value={value} 
      placeholder="Add Todo..." 
      onChange={e=>setValue(e.target.value)}
      />
    </form>
  )
}

function App(){
  const [todos,setTodos] = useState([
    {
      text:"Learn about React",
      completed: false
    },
    {
      text:"Meet friend for lunch",
      completed: false
    },
    {
      text:"Build really cool todo app",
      completed: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos,{text}];
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos)
  }

  const openTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,index)=>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} openTodo={openTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;