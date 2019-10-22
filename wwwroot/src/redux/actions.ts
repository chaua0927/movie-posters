import * as types from '../types/index';
import * as constants from './constants';
import { IMoviePosterData, IReviewData, IApiError, IReviewForm } from '../types/api_models';


export const apiError = (e: IApiError): types.ApiErrorAction => {
    return {
        type: constants.API_ERROR,
        payload: e
    }
}

export const apiRecover = (): types.ApiRecoverAction => {
    return {
        type: constants.API_RECOVER
    }
}

export const requestGetMoviePosters = (): types.RequestGetMoviePostersAction => {
    return { 
        type: constants.REQUEST_GET_MOVIE_POSTERS
    };
}

export const dataLoadedMoviePosters = (data: IMoviePosterData[]): types.DataLoadedMoviePostersAction => {
    return {
        type: constants.DATA_LOADED_MOVIE_POSTERS, 
        payload: data
    }
}

export const requestGetMoviePoster = (id: number): types.RequestGetMoviePosterAction => {
    return {
        type: constants.REQUEST_GET_MOVIE_POSTER,
        payload: id
    }
}

export const dataLoadedMoviePoster = (data: IMoviePosterData): types.DataLoadedMoviePosterAction => {
    return {
        type: constants.DATA_LOADED_MOVIE_POSTER,
        payload: data
    }
}

export const requestDeleteMoviePoster = (id: number): types.RequestDeleteMoviePosterAction => {
    return {
        type: constants.REQUEST_DELETE_MOVIE_POSTER,
        payload: id
    }
}

export const deletedMoviePoster = (): types.DeletedMoviePosterAction => {
    return {
        type: constants.DELETED_MOVIE_POSTER,
    }
}

// let nextMoviePosterId = 0;
// export const addMoviePoster = (payload) => {
//     type: REQUEST_POST_MOVIE_POSTER,
//     payload: payload
// }

export const requestAddReview = (data: IReviewForm): types.RequestAddReviewAction => {
    return {
        type: constants.REQUEST_ADD_REVIEW,
        payload: data
    }
}

export const dataLoadedReview = (data: IReviewData): types.DataLoadedReviewAction => {
    return {
        type: constants.DATA_LOADED_REVIEW,
        payload: data
    }
}

export const requestDeleteReview = (id: number): types.RequestDeleteReviewAction => {
    return {
        type: constants.REQUEST_DELETE_REVIEW
    }
}

export const deletedReview = (): types.DeletedReviewAction => {
    return {
        type: constants.DELETED_REVIEW
    }
}