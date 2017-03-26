import axios from 'axios'

axios.defaults.baseURL = 'https://spotify-api-challenge.herokuapp.com/'

export default {
  fetchPeople: function(){
    return axios.get('/people').then(response => response.data)
  },
  fetchPerson: function(personId){
    return axios.get(`/people/${personId}`).then(response => response.data)
  },
  addPerson: function(personObj){
    return axios.post("/people", personObj).then(response => response.data)
  },
  editPerson: function(personId, homeObject){
   return axios.put(`/people/${personId}`, homeObject).then(response => response.data)
  },
  deletePerson(id) {
    return axios.delete(`/people/${id}`).then(response => response.data)
  }
}
