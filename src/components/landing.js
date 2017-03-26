import React, { Component } from 'react'
import PeopleForm from './peopleForm'
import PeopleList from './peopleList'
import PeopleEdit from './peopleEdit'

export default class Landing extends Component {
  render() {
    return(
      <div className='container'>
              <h1 className="logo">People App</h1>
        <div className='row'>
          <div className='col-md-4'>
            <PeopleForm />
          </div>
          <div className='col-md-4'>
            <PeopleList />
          </div>
          <div className='col-md-4'>
            <div className="container">
              <PeopleEdit />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
