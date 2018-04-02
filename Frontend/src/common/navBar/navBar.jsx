import React from 'react'

import './navBar.css'
import NavBarItem from './navBarItem'
import SearchIcon from '../searchBar/icon'

export default navbar => (
  <nav>
    <ul className='main-nav'>
      <NavBarItem path='javascript:;' label='Estados' />
      <NavBarItem path='javascript:;' label='Politicos' />
      <NavBarItem path='javascript:;' label='Quiz' />
      <NavBarItem path='javascript:;' label='Recordistas' />
      <NavBarItem path='javascript:;' label='FAQ' />
      <SearchIcon />
    </ul>
  </nav>
)
