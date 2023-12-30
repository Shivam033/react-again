/* eslint-disable react/prop-types */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [todo, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todo, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  function countHandler(){
    setCount(count+1);
  }
  return (
    <>
      <div>
        <button onClick={countHandler}>Click here: {count}</button>
      </div>
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {todo.map(function(todo) {
          // eslint-disable-next-line react/jsx-key
          return <Todo title={todo.title} description={todo.description} />
        })}
      </div>
    </>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
