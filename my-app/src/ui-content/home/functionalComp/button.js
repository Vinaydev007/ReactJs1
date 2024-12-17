import React from 'react'

export default function button(props) {
    console.log(props)
    let{value,onClick}=props;
  return (
    <div><button onClick={onClick}>{value}</button></div>
  )
}
