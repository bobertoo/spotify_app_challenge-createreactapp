import { combineReducers } from 'redux'
import peopleReducer from './peopleReducer'
import editPersonReducer from './editPersonReducer'

const rootReducer = combineReducers({
  people: peopleReducer,
  person: editPersonReducer
})

export default rootReducer
