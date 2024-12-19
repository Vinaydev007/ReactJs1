import React from 'react'
import { userinfo } from './parent'
import { useContext } from 'react'
export default function Child2() {
    const data=useContext(userinfo)
  return (
    <div>{data}</div>
  )
}
