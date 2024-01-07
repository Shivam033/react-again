import axios from "axios";
import { useEffect, useState } from "react"

function App2() {

  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={function(){ setSelectedId(1)}}>1</button>
    <button onClick={function(){ setSelectedId(2)}}>2</button>
    <button onClick={function(){ setSelectedId(3)}}>3</button>
    <button onClick={function(){ setSelectedId(4)}}>4</button>
    <Todo id={selectedId}/>
  </div>
}

// eslint-disable-next-line react/prop-types
function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(res =>{
      setTodo(res.data.todo);
    })
  }, [id])

  return <div>
    Id : {id}
    <h3>{todo.title}</h3>
    <h5>{todo.description}</h5>
  </div>
}

export default App2