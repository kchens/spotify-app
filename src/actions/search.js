export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export function setSearchTerm(searchTerm) {
    console.log('in setSearchTerm')
    console.log(searchTerm)
  return { type: SET_SEARCH_TERM, searchTerm }
}
