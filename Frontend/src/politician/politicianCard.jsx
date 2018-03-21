import React from 'react'
import './politician.css'

export default props => {
  const { all,
          onUfClick,
          onPartyClick
        } = props
  const { electoralName,
          electoralUf,
          politicalPartyInitials,
          urlPhoto,
          _id
        } = all
    
  return(
    <div className='politician-card'>
      <h2 onClick={() => onPartyClick(`${politicalPartyInitials}`)}>
        {politicalPartyInitials}
      </h2>
      <img src={urlPhoto} alt={electoralName}/>
      <div className='container'>
        <h4>{electoralName}</h4>
        <div>
          <p onClick={() => onUfClick(`${electoralUf}`)}>
            {electoralUf}
          </p>
        </div>
      </div>
    </div>
  )
}