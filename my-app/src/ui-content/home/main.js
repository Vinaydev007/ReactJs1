import React, { Component } from 'react'
import Updating from '../lifecycle/updatingphase/updating'
import Hooks from './functionalComp/parent/hooks'
import FormEvent from './functionalComp/form/formevent'
import Parent from '../contextapi/parent'
import Counter from '../purecomponent/counter'
import Useeffect from '../lifecycle-funcom/useeffect'
import {BrowserRouter as Router,Link,Routes,Route}from'react-router-dom'
import Home from '../react-router/Home'

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Updating/> */}
        {/* {<Hooks/>} */}
        {/* <FormEvent/> */}
        {/* <Parent/> */}
        {/* <Counter/> */}
        {/* <Useeffect/> */}
        <Home/>
      </div>

    )
  }
}
