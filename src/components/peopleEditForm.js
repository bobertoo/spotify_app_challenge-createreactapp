import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editPerson } from '../actions'

class PeopleEditForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      favoriteCity: this.props.favoriteCity
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeFavoriteCity = this.handleChangeFavoriteCity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleCancel = this.handleCancel.bind(this)

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id != nextProps.id) {
      this.setState({
        id: nextProps.id,
        name: nextProps.name,
        favoriteCity: nextProps.favoriteCity
      });
    }
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
    this.props.editPerson(
      this.props.id,
      {
        name: this.state.name,
        favoriteCity: this.state.favoriteCity
      }
    )
  }

  // handleCancel(event){
  //   event.preventDefault()
  //   this.setState({
  //     name: this.props.name,
  //     favoriteCity: this.props.favoriteCity
  //   })
  // }

  render() {
    return(
      <div>
        <p>{`Editing ${this.state.name}`}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Edit name:
            <br/>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </label>
          <br/>
          <label>
            Edit favorite city:
            <br/>
            <input
              type="text"
              name="favoriteCity"
              value={this.state.favoriteCity}
              onChange={this.handleChangeFavoriteCity}
            />
          </label>
          <br/>
          <button type="submit">Confirm Edit</button>
        </form>
        {/* <button onClick={this.handleCancel}>Refresh Edit</button>
        <p>refresh if changing person that you're editing</p> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.person.id,
    name: state.person.name,
    favoriteCity: state.person.favoriteCity
  }
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({ editPerson }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)( PeopleEditForm )
