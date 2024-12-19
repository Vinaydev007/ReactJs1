import React, { createContext } from 'react'
import { useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

export const userinfo=createContext();
export default function Parent() {
    const[user,usercontext]=useState("vinayBairavarapu")
  return (
    <div><userinfo.Provider value={user}>
         {/* <Child1/> */}
         <Child2/>
        </userinfo.Provider></div>
  )
}
