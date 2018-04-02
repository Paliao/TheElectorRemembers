import React from 'react'

export default props => (
  <li>
    <a href={props.path}>
        {props.label}
    </a>
  </li>
)