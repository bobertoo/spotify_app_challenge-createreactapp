import peopleAdapter from '../adapters/peopleAdapter'

export function addPerson(personObj){
  var newPerson = peopleAdapter.addPerson(personObj)

  return {
    type: 'ADD_PERSON',
    payload: newPerson
  }
}

export function fetchPerson(id) {
  var response = peopleAdapter.fetchPerson(id)
  return {
    type: "FETCH_PERSON",
    payload: response
  }
}

export function editPerson(id, personObj) {
  var response = peopleAdapter.editPerson(id, personObj)
  return {
    type: "EDIT_PERSON",
    payload: response
  }
}

export function deletePerson(id) {
  var response = peopleAdapter.deletePerson(id)

  return {
    type: "DELETE_PERSON",
    payload: response
  }
}

export function fetchPeople(){
  var people = peopleAdapter.fetchPeople()

  return {
    type: 'FETCH_PEOPLE',
    payload: people
  }
}
