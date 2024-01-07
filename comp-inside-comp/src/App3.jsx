import { useMemo, useState } from "react"

function App3() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  // let count=0;
  // for(let i=1; i<=inputVal; i++){
  //   count = count + i;
  // }
// useMemo is for expensive operations
// useEffect is for lifecycle event
  let count = useMemo(()=>{
    let finalCount=0;
    for(let i=1; i<=inputVal; i++){
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputVal])

  return <>
    <input onChange={e =>{
      setInputVal(e.target.value);
    }} placeholder="Find sum"></input>
    <br/>
    Sum from 1 to {inputVal} is {count}
    <br/>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter ({counter})</button>
    </>
}

export default App3