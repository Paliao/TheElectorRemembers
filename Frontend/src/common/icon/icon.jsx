import React from 'react'
import MaterialIcons from 'material-icons-react'

export default props => (
  <div className={props.iconClass}>
    <MaterialIcons icon={props.icon} onClick={props.onClick}/>
  </div>
)