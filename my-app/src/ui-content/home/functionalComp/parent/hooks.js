import { useState } from "react"
import React from 'react'
import Button from "../button"

export default function Hooks() {
   const[counter,setCounter]= useState(0)
//  const increment=()=>{
//          setCounter(counter+1)
//    }
//    const decrement=()=>{
//     setCounter(counter-1)
// }
const Handlercounter=(action)=>{
    switch(action){
        case 'increment':setCounter(counter+1);break;
        case 'decrement':setCounter(counter-1);break;
        default :setCounter(0);
    }
}
  return (
    <div><h1>{counter}</h1>
    <Button onClick={()=>{Handlercounter('increment')}} value="increment"/>
    <Button onClick={()=>{Handlercounter('decrement')}} value="decrement"/></div>
  )
}
