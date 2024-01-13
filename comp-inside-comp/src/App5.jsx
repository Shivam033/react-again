import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate,  } from 'react-router-dom'
import Dashboard from './assets/components/Dashboard'
import Landing from './assets/components/Landing'

export default function App5() {
  return (
    <div>
      {/* <div>
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
      </div> */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// This is the right way of routing in react as it loads instatnly
// and no new html is getting loaded on route change
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