import React from 'react'

export default props => (
  <li>
    <a href={props.path} onClick={props.onClick}>
      <span>
        <i className={props.icon}/>
      </span>
    </a>
  </li>
)