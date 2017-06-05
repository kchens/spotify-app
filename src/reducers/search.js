import { SET_SEARCH_TERM, GET_AND_SET_ARTIST_TOP_TRACKS } from '../actions/search'

const DEFAULT_STATE = {
    term: ''
}

const orderTracksByMostPopular = (a, b) => {
    if (a.popularity < b.popularity)
        return 1;
    if (a.popularity > b.popularity)
        return -1;
    return 0;
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {term: action.searchTerm})
  return newState
}

const setArtistTopTracks = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { topTracks: action.tracks.tracks.sort(orderTracksByMostPopular)})
  return newState
}

const search = (state = DEFAULT_STATE, action) => {
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