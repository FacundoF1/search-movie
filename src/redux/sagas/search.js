import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE, SearchActionByMovieTypes } from '../../consts/actionTypes';
import { apiCall } from "../api";

/**
 * Cuando se dispare las actions COMPLETE O ERROR 
 * se va a ejecutar las acciones correspondiente
 * @param {*} param0 
 */
export function* searchMovie({ payload }) {
    try {
        const results = yield call( apiCall, `&s=${payload.movieName}`, null, null, 'GET' );
        yield put({ type: SEARCH_MOVIE_COMPLETE, results });
    } catch (error) {
        yield put({ type: SEARCH_MOVIE_ERROR, error });
    }
}

/**
 * Cuando se dispare las actions COMPLETE O ERROR 
 * se va a ejecutar las acciones correspondiente
 * @param {*} param0 
 */
export function* searchMovieById({ payload }) {
    try {
        const movie = yield call( apiCall, `&i=${payload.movieId}`, null, null, 'GET' );
        yield put({ type: SearchActionByMovieTypes.SEARCH_MOVIE_ID_COMPLETE, movie });
    } catch (error) {
        yield put({ type: SearchActionByMovieTypes.SEARCH_MOVIE_ID_ERROR, error });
    }
}

export default function* search() {
    // va a estar escuchando a la action
    // cuando inicie va a disparar la funcion searchMovie
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
    yield takeLatest(SearchActionByMovieTypes.SEARCH_MOVIE_ID_START, searchMovieById);
}