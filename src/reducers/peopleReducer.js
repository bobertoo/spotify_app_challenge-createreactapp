export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return action.payload
    case 'ADD_PERSON':
      return [action.payload, ...state]
    case 'DELETE_PERSON':
      return action.payload
    case 'EDIT_PERSON':
      return action.payload
    default:
      return state
  }
}
