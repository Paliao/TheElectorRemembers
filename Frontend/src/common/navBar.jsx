import React, { Component } from 'react'

import './navBar.css'

class Navbar extends Component {

  render() {
    return(
      <div>
        <ul className='navbar'>
          <li><a href="#">Estados</a></li>
          <li><a href="#">Politicos</a></li>
          <li><a href="#">Votações</a></li>
          <li><a href="#">Ajude-nos</a></li>
          <li><a href="#">Mais sobre nós</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar