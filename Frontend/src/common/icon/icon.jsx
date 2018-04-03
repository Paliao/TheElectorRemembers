import React from 'react'
import MaterialIcons from 'material-icons-react'

import './icon.css'

export default props => (
  <div className={props.iconClass}>
    <MaterialIcons icon={props.icon} onClick={() => console.log('aaaaaa')}/>
  </div>
)