import React from 'react'
import './profile.css'

export default props => (
  <div className='profile-page'>
    <h1>{props.match.params.politician_id}</h1>
  </div>
)

// const { all } = props
//   const { actualStatus,
//           cabinetPhone,
//           civilName, 
//           dateOfBirth,
//           electoralCondition,
//           electoralName,
//           electoralUf,
//           email,
//           gender,
//           hometown,
//           id,
//           kind,
//           politicalPartyInitials,
//           scholarity,
//           situation,
//           ufOfBirth,
//           updated,
//           uriPoliticalParty,
//           urlPhoto,
//           _id 
//         } = all
