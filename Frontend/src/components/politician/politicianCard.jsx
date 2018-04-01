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
    <li>

      <figure className='card-photo'>
        <Link to={`profile/${politician_id}`} >
          <img src={urlPhoto} alt={electoralName}/>
        </Link>
      </figure>

    </li>
  )
}
      // <h2 onClick={() => onPartyClick(politicalPartyInitials)}>
      //   {politicalPartyInitials}
      // </h2>
      //   <h4>{electoralName}</h4>
      //   <div>
      //     <p onClick={() => onUfClick(electoralUf)}>
      //       {electoralUf}
      //     </p>
      // </div>