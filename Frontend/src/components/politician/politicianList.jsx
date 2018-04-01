import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PoliticianCard from './politicianCard'
import { getList, filterUf, filterParty } from './politicianActions'

class PoliticianList extends Component {
  componentWillMount() {
    this.props.getList()
  }

  renderPoliticians() {
    const list = this.props.list
    return list.map( politician => {
      return <PoliticianCard 
                key={politician._id}
                all={politician}
                onUfClick={this.props.filterUf}
                onPartyClick={this.props.filterParty}
              />
    })
  }

  render() {
    return (
      <section >
        <ul className='list-row'>
          {this.renderPoliticians()}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = state => ({ list: state.politician.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, filterUf, filterParty }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PoliticianList)