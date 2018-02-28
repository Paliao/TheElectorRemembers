import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PoliticianCard from './politicianCard'
import { getList } from './politicianActions'

class PoliticianList extends Component {
  componentWillMount() {
    this.props.getList(0)
  }

  renderPoliticians() {
    const list = this.props.list
    return list.map( politician => {
      return <PoliticianCard key={politician._id} all={politician}/>
    })
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