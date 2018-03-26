import React, { Component } from 'react'

const Profile = ({ match }) => (
  <div>
    <h3>
      {match.params.profile_id}
    </h3>
  </div>
)

export default Profile