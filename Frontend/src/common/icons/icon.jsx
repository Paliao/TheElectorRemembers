import React from 'react'

export default props => (
  <li>
    <span onClick={props.onClick}>
      <i className={props.icon}/>
    </span>
  </li>
)