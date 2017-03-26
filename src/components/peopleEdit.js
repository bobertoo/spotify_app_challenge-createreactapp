import React, { Component } from 'react'
import { connect } from 'react-redux'
import PeopleEditForm from './peopleEditForm'

class PeopleEdit extends Component {
  render() {
    return(
      <div className='container'>
      <div className='row'>
        <h3>Edit-A-Person</h3>
        {this.props.person.name ? <PeopleEditForm /> : <h4>Click on Edit!</h4>}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    person: state.person
  }
}

export default connect(mapStateToProps)( PeopleEdit )
