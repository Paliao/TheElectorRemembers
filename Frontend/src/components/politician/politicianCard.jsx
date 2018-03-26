import React from 'react'
import { Link } from 'react-router-dom'
import './politician.css'

export default props => {
  const { match,
          all,
          onUfClick,
          onPartyClick
        } = props
  const { electoralName,
          electoralUf,
          politicalPartyInitials,
          urlPhoto,
          politician_id,
          _id
        } = all
    
  return(
    <div className='politician-card'>
      <h2 onClick={() => console.log(props.all)}>
        {politicalPartyInitials}
      </h2>

      <Link to={`profile/${politician_id}`} >
        <img src={urlPhoto} alt={electoralName}/>
      </Link>

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