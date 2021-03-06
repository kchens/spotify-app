import SpotifyApi from 'spotify-web-api-js'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const GET_AND_SET_ARTIST_TOP_TRACKS = 'GET_AND_SET_ARTIST_TOP_TRACKS'

export const setSearchTerm = (searchTerm) => {
    return (dispatch) => {
        dispatch({ type: SET_SEARCH_TERM, searchTerm })
        dispatch(getAndSetArtistTopTracks(searchTerm))
    }
}

const parseArtistId = (data) => {
    return data.artists.items[0].id
}

const getAndSetArtistTopTracks = (searchTerm) => {
    // Figure out how to implement later
    // curl -H "Authorization: Basic ZWRlYzg3MmQ4NzRkNGYwNmI5ZDQyYTVhZjQzM2I2MWM6NjdjYTYxMjk2MzllNDVhNjhiODNmNDQ0NDlhOWIwZDU=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
    // fetch('https://accounts.spotify.com/api/token', { 
    //     method: 'post', 
    //     mode: 'no-cors',
    //     headers: {
    //         'Authorization': 'Basic '+ btoa(username + ':' + password), 
    //         'Content-Type': 'application/json'
    //     }, 
    //     body: JSON.stringify({
    //         'grant_type': 'client_credentials',
    //     })
    // }).then((response) => {
    //     console.log(response);
    // })
    return (dispatch) => {
        const defaultCountryId = 'US';
        const spotifyApi = new SpotifyApi();
        spotifyApi.setAccessToken("BQBIewohXjNJVz8uwD6VukT6WPu3DKo_K3tk3IhnRKZJfFyw_allIoeaBBEvP2EkiI0lWFSZJ2N9bB4drBIXwg");
        
        return spotifyApi.searchArtists(searchTerm, {limit: 1})
            .then((data) => {
                return parseArtistId(data);
            })
            .then((artistId) => {
                spotifyApi.getArtistTopTracks(artistId, defaultCountryId)
                .then((tracks) => {
                    dispatch({ type: GET_AND_SET_ARTIST_TOP_TRACKS, tracks })
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
}