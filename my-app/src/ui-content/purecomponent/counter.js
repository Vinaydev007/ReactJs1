import React from 'react'
import { useState } from 'react'
import Display from './display'

export default function Counter() {
        const [count,setcount]=useState(0)
        const [random,setrandom]=useState(0)
        const HandleInc=()=>{
            setcount(count+1)
        }
        const Handlerandom=()=>{
           setrandom(Math.random())
        }
  return (
    <div>
        {/* <h1>{count}</h1> */}
        {random}
        <button onClick={HandleInc}>increment</button>
        <button onClick={Handlerandom}>Random</button>
        <Display value={count}/>
    </div>
  )
}
