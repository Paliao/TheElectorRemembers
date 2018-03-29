import React from 'react'
import { Link } from 'react-router-dom'

import './button.css'

export default props => (
  <li className={props.className}>
    <Link to={props.path} >
      {props.label}
    </Link>
  </li>
)