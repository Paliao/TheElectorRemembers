import React from 'react'

export default props => (
  <div>
    <h1>
      {props.match.params.profile_id}
    </h1>
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
