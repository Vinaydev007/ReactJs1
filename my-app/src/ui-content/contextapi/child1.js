import React from 'react'
import Child2 from './child2'
import { useContext } from 'react'
import { userinfo } from './parent'

export default function Child1() {
    const data=useContext(userinfo)
  return (
    <div>
         <h1><Child2/></h1>
        <h1>{data}</h1>
        </div>
  )
}
