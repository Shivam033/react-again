import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function countHandler(){
    setCount(count+1);
  }
  return (
    <>
      <div>
        <button onClick={countHandler}>Click here: {count}</button>
      </div>
    </>
  )
}

export default App
