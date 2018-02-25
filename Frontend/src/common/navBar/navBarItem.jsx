import React from 'react'

export default props => (
  <li>
    <a href={props.path}>
        <span>{props.label}</span>
    </a>
  </li>
)