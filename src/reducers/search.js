import { SET_SEARCH_TERM, GET_AND_SET_ARTIST_TOP_TRACKS } from '../actions/search'

const DEFAULT_STATE = {
    term: ''
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {term: action.searchTerm})
  return newState
}

const setArtistTopTracks = (state, action) => {
    console.log('setting new artist top track state')
  const newState = {}
  console.log(state)
  Object.assign(newState, state, { topTracks: state})
  console.log(newState)
  return newState
}

const search = (state = DEFAULT_STATE, action) => {
    console.log(action)
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case GET_AND_SET_ARTIST_TOP_TRACKS:
      return setArtistTopTracks(state, action)
    default:
      return state
  }
}

export default search