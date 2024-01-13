import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = lazy(()=> import('./assets/components/Dashboard'))
const Landing = lazy(()=> import('./assets/components/Landing'))

function App6() {
  return (
    <BrowserRouter>
    <NavBar/>
    {/* SuspenseAPI */}
      <Routes>
        <Route path='/dashboard' element={ <Suspense fallback={"Loading..."}><Dashboard/></Suspense>}/>
        <Route path='/' element={<Suspense fallback={"Loading..."}><Landing/></Suspense>}/>

      </Routes>
    </BrowserRouter>
  )
}

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
        Hello I am a header.
        <div>
          <button onClick={()=>{
            navigate("/");
          }}>Landing</button>
          <button onClick={()=>{
            navigate("/dashboard"); 
            // navigate only works inside browserRouter selector
          }}>Dashboard</button>
        </div>
      </div>
  )
}

export default App6