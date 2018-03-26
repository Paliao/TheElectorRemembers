import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <li>
    <Link to={props.path}>
      <span onClick={props.onClick}>
        <i className={props.icon}/>
      </span>
    </Link>
  </li>
)