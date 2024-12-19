import React, { Component } from 'react'
import Updating from '../lifecycle/updatingphase/updating'
import Hooks from './functionalComp/parent/hooks'
import FormEvent from './functionalComp/form/formevent'
import Parent from '../contextapi/parent'
import Counter from '../purecomponent/counter'

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Updating/> */}
        {/* {<Hooks/>} */}
        {/* <FormEvent/> */}
        {/* <Parent/> */}
        <Counter/>
      </div>

    )
  }
}
