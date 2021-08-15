import {IMovie} from "../services/studio-ghibli";
import * as actionTypes from "./reducer.action-types";

export interface IMovieState {
  activeMovie?: IMovie;
  movies: IMovie[];
}

const initState: IMovieState = {
  activeMovie: undefined,
  movies: [] as IMovie[],
};

const rootReducer = (state: IMovieState = initState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      const movies = action.payload as IMovie[];
      return {
        ...state,
        movies
      }
    case actionTypes.SET_ACTIVE_MOVIE:
      const activeMovie = action.payload as IMovie;
      return {
        ...state,
        activeMovie
      }
    default:
      return state;
  }
}

export default rootReducer;