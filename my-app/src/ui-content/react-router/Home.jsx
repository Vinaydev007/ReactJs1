import React from 'react'
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'
import Useeffect from '../lifecycle-funcom/useeffect'

export default function Home() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
       <Router>
         <Link to='/home'>Home</Link>
         <Link to='/about'>About</Link>
         <Routes>
           <Route path='/home' element={<Useeffect/>}></Route>
       </Routes>
       </Router>
       
    </div>
  )
}
