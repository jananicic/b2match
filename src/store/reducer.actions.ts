import * as actionTypes from "./reducer.action-types";
import {IMovie} from "../services/studio-ghibli";

export const setMoviesAction = (payload: IMovie[]) => ({type: actionTypes.SET_MOVIES, payload});
export const setActiveMovieAction = (payload: IMovie) => ({type: actionTypes.SET_ACTIVE_MOVIE, payload});