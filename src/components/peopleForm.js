import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPerson } from '../actions'

class PeopleForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      favoriteCity: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeFavoriteCity = this.handleChangeFavoriteCity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(event){
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  handleChangeFavoriteCity(event){
    event.preventDefault()
    this.setState({
      favoriteCity: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addPerson( {
      name: this.state.name,
      favoriteCity: this.state.favoriteCity
    } )
    this.setState({
      name: '',
      favoriteCity: ''
    })
  }

  render() {
    return(
      <div className='container'>
      <div className='row'>
        <h3>Create-A-Person</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a name:
        <br/>
            <input
              type="text"
              name="name"
              placeholder="(example: Guy Fieri)"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </label>
        <br/>
          <label>
            Enter their favorite city:
        <br/>
            <input
              type="text"
              name="favoriteCity"
              placeholder="(example: Flavortown)"
              value={this.state.favoriteCity}
              onChange={this.handleChangeFavoriteCity}
            />
          </label>
        <br/>
          <button type="submit">Add new person</button>
        </form>
      </div>
      </div>
    )
  }
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({ addPerson }, dispatch)
}

export default connect(null, mapDispatchToProps)( PeopleForm )
