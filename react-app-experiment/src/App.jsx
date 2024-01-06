/* eslint-disable react/prop-types */
import { useState } from "react"

function App() {
  // const [title, setTitle] = useState("Name is Shivam")

  let counter = 4;
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go gym",
    desc: "go today"
  },
  {
    id: 2,
    title: "go school",
    desc: "go tomorrow"
  },
  {
    id: 3,
    title: "go home",
    desc: "go tomorrow"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      desc: Math.random()
    }])
  }
  // function updateTitle() {
  //   setTitle("Name is "+ Math.random());
  // }
  return (
    // <React.Fragment>
    //   <Header title="Shiv"></Header>
    //   <Header title="Shivam"></Header>
    // </React.Fragment>
    // <div>
    //   <button onClick={updateTitle}>Update the title</button>
    //   <Header title={title}></Header>
    //   <HeaderWithButton/> 
    //   <Header title="Shivam"></Header>
    //   <Header title="Shivam"></Header>
    //   <Header title="Shivam"></Header>
    //   <Header title="Shivam"></Header>
    // </div>
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc}></Todo>)}
    </div>
  )
}

// function is made to stop unneccessary re-rendering
// function HeaderWithButton(){
//   const [title, setTitle] = useState("Name is Shivam")

//   function updateTitle() {
//     setTitle("Name is "+ Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//     </div>
//   )
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// .memo is also prevents re-rendering of that conponent
// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// })


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

export default App
