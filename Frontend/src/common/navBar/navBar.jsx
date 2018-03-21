import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './navBar.css'
import NavBarItem from './navBarItem'
import Icon from '../icons/icon'
import { getList } from '../../politician/politicianActions'

class Navbar extends Component {

  render() {
    return(
      <div className='navbar'>
        <ul>
          <Icon path='#/' icon='fa fa-globe' onClick={this.props.getList}/>
          <NavBarItem path='javascript:;' label='Estados' />
          <NavBarItem path='javascript:;' label='Politicos' />
          <NavBarItem path='javascript:;' label='Votações' />
          <NavBarItem path='javascript:;' label='Ajude-nos' />
          <NavBarItem path='javascript:;' label='Mais sobre nós' />
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default  connect(null, mapDispatchToProps)(Navbar)