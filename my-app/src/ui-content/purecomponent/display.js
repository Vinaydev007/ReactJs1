// import React, { PureComponent } from 'react'

// export default class display extends PureComponent {
//   render(props) {
//     console.log("re-rendering")
//     return (
//       <div><h1>{this.props.value}</h1></div>
//     )
//   }
// }

import React from 'react'
function display(props) {
    console.log("re-rendering")
  return (
    <div><h1>{props.value}</h1></div>
  )
}
export default React.memo(display)
