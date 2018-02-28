import React from 'react'
import './politician.css'

export default (props) => {
  const { all } = props
  const { electoralName,
          electoralUf,
          politicalPartyInitials,
          urlPhoto,
          _id 
        } = all
    
  return(
    <div className='politician-card'>
      <h2>{politicalPartyInitials}</h2>
      <img src={urlPhoto} alt={electoralName}/>
      <div className='container'>
        <h4>{electoralName}</h4>
        <div>
          <p>{electoralUf}</p>
        </div>
      </div>
    </div>
  )
}