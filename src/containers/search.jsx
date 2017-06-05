import { connect } from 'react-redux'
import { setSearchTerm } from '../actions/search'
import SearchLayout from '../components/SearchLayout'

const mapStateToProps = (state) => {
  return { 
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchTerm) => { dispatch(setSearchTerm(searchTerm))}
  }
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLayout)

export default Search