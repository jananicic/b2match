import {useEffect, useState} from "react";
import {fetchMovies, IMovie} from "../../services/studio-ghibli";

const Home = () => {
  const [movies, setMovies] = useState([] as IMovie[]);

  useEffect(() => {
    const fetchMoviesAPI = async () => {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetchMoviesAPI();
  }, []);

  return <>
    {
      movies.map( movie => {
        return <div key={movie.id}>
          <h1>{movie.title}</h1>
        </div>
      })
    }
  </>
}

export default Home;