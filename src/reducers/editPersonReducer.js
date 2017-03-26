export default function(state={}, action){
  switch (action.type) {
    case 'FETCH_PERSON':
      return action.payload
    default:
      return state
  }
}
