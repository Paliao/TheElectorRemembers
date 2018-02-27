import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Politician from './politician'
import { getList } from './politicianActions'

class PoliticianList extends Component {
  componentWillMount() {
    this.props.getList(0)
  }

  renderPoliticians() {
    const list = this.props.list
    return list.map( politician => (
      <Politician all={politician}/>
    ))
  }

  render() {
    return (
      <div>
        {this.renderPoliticians()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.politician.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PoliticianList)