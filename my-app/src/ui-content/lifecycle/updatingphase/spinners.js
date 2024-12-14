import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default class spinners extends Component {
  render() {
    return (
      <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
     </div>
    )
  }
}
