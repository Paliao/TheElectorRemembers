import React from 'react'

import Button from '../../common/button/button'

export default props => (
  <ul className='home-buttons'>
    <Button className='btn btn-ghost' path='/politicianList' label='Politicos'/>
    <Button className='btn btn-full' path='#' label='Quiz'/>
    <Button className='btn btn-ghost' path='#' label='Recordistas'/>      
  </ul>
)