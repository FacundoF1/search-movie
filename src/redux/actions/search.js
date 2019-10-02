import { SEARCH_MOVIE_START, SearchActionByMovieTypes } from '../../consts/actionTypes'

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});
 
export const searchMovieById = payload => ({
    type: SearchActionByMovieTypes.SEARCH_MOVIE_ID_START,
    payload
});