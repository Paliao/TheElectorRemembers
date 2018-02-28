import React from 'react'
import './politician.css'

export default (props) => {
  const { all } = props
  const { actualStatus,
          civilName, 
          electoralCondition,
          electoralName,
          electoralUf,
          email,
          gender,
          hometown,
          kind,
          politicalPartyInitials,
          situation,
          urlPhoto,
          _id 
        } = all
  return(
    <div className='politician-card'>
      <img src={urlPhoto} alt={electoralName}/>
      <div className='container'>
        {electoralName}
      </div>
    </div>
  )
}