import React, { Component } from 'react'
import Updating from '../lifecycle/updatingphase/updating'
import Hooks from './functionalComp/parent/hooks'

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Updating/> */}
        {<Hooks/>}
      </div>

    )
  }
}
