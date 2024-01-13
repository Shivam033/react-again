import { useState } from 'react'

export default function App7() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount}/>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function Count({count, setCount}) {
  // This is prop drilling
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
} 

// eslint-disable-next-line react/prop-types
function Buttons({count, setCount}) {
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>
        Increase
      </button>
      <button onClick={()=>{
        setCount(count-1)
      }}>
        Decrease
      </button>
    </div>
  )
}