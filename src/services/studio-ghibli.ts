import axios from "axios";

export interface IMovie {
  "id": string,
  "title": string,
  "original_title": string,
  "description": string,
  "director": string,
  "producer": string,
  "release_date": string,
  "running_time": string,
  "rt_score": string,
}

/**
 * Fetch all movies from studio ghibli
 * @return Promise<IMovie[]>
 */
export const fetchMovies = async (): Promise<IMovie[]> => {
  try {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    return response.data;
  } catch (e) {
    throw e;
  }
}

/**
 * Fetch specific movie from studio ghibli with movie id
 * @param id
 * @return Promise<IMovie>
 */
export const fetchMovie = async (id: string): Promise<IMovie> => {
  try {
    const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}