import { 
	SEARCH_MOVIE_START, 
	SEARCH_MOVIE_ERROR, 
	SEARCH_MOVIE_COMPLETE,
	SearchActionByMovieTypes
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		// todos
		case SEARCH_MOVIE_START:
			return {...state, isLoading: true};
			break;
		case SEARCH_MOVIE_ERROR:
			return {...state, isLoading: false, movieResults: null};
			break;
		case SEARCH_MOVIE_COMPLETE:
			return {...state, isLoading: false, movieResults: action.results.data.Search };
			break;

		// por id
		case SearchActionByMovieTypes.SEARCH_MOVIE_ID_START:
			return {...state, isLoading: true, movieResults: null};
			break;
		case SearchActionByMovieTypes.SEARCH_MOVIE_ID_ERROR:
			return {...state, isLoading: false, movieResults: null};
			break;
		case SearchActionByMovieTypes.SEARCH_MOVIE_ID_COMPLETE:
			return {...state, isLoading: false, movieResult: action.movie.data };
			break;
		default:
			return state;
	}
}
