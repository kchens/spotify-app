import SpotifyApi from 'spotify-web-api-js'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const GET_AND_SET_ARTIST_TOP_TRACKS = 'GET_AND_SET_ARTIST_TOP_TRACKS'

// console.log(process.env.SPOTIFY_CLIENT_SECRET)
// const spotifyApi = new SpotifyWebApi({
//     clientId: process.env.SPOTIFY_CLIENT_ID,
//     clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//     redirectUri: 'http://localhost:8888/callback'
// });


export const setSearchTerm = (searchTerm) => {
  getAndSetArtistTopTracks(searchTerm);
  return { type: SET_SEARCH_TERM, searchTerm }
}

const parseArtistId = (data) => {
    return data.artists.items[0].id
}

const orderTracksByPopularity = (a, b) => {
    if (a.popularity < b.popularity)
        return -1;
    if (a.popularity > b.popularity)
        return 1;
    return 0;
}

export function getAndSetArtistTopTracks(searchTerm) {
    // debugger
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

    const defaultCountryId = 'US';
    const spotifyApi = new SpotifyApi();
    let topArtistTracks;
    spotifyApi.setAccessToken("BQAHr-FVpMSo3FNi268nd2EIQZSznGYObXCk9ThcYpy6TMX6-wSefHzIRcUjgCv5w0gkHlDDar5kB1C-ALdHTg");
    
    spotifyApi.searchArtists(searchTerm, {limit: 1})
        .then((data) => {
            return parseArtistId(data);
        })
        .then((artistId) => {
            spotifyApi.getArtistTopTracks(artistId, defaultCountryId)
            .then((tracks) => {
                console.log(tracks)
                return { type: GET_AND_SET_ARTIST_TOP_TRACKS, tracks }
            })
            .catch((err) => {
                console.error(err);
            })
        })
        .catch((err) => {
            console.error(err);
        })
}