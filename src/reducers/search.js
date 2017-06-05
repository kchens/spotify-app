import { SET_SEARCH_TERM } from '../actions/search'

const DEFAULT_STATE = {
    term: '',
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {term: action.searchTerm})
  console.log('newState')
  console.log(newState)
  return newState
}

const search = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default search