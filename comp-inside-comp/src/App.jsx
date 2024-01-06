/* eslint-disable react/prop-types */


import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async(res)=>{
      console.log(res);
      const json = await res.json();
      setTodos(json.todos);
    })
    }, 2000);
  }, [])
  return (
    <>
      <CardWrapper>
        Hello
      </CardWrapper>
      <CardWrapper>
        <div>
          div says hello
        </div>
      </CardWrapper>
      <CardWrapper>
        Hello
      </CardWrapper>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc}></Todo>)}
    </>
  )
}

function Todo({title, desc}){
  return (
    <>
      <h3>
        {title}
      </h3>
      <h5>
        {desc}
      </h5>
    </>
  )
}

function CardWrapper({children}) {
  return (
    <div style={{border: "2px solid black"}}>
      {children}
    </div> 
  ) 
}

export default App
