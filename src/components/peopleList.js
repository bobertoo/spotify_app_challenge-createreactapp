import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPeople, deletePerson, fetchPerson } from '../actions'

class PeopleList extends Component {
  componentDidMount(){
    this.props.fetchPeople()
  }

  deletePerson(id) {
    this.props.deletePerson(id)
  }

  fetchPerson(id) {
    this.props.fetchPerson(id)  
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <h3>List of People</h3>
        { this.props.people.map((person) =>
          <div key={person.id} className="peopleList">
            <p><span>Name:</span> {person.name}</p>
            <p><span>Favorite City:</span> {person.favoriteCity}</p>
            <button onClick={ this.fetchPerson.bind(this, person.id )}>Edit</button>
            <button onClick={ this.deletePerson.bind(this, person.id )}>Delete</button>
          </div>
        )}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPeople, deletePerson, fetchPerson }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
