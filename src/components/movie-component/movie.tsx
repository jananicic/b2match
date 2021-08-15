import {Link} from "react-router-dom"
import {Button} from "@material-ui/core";
import {IMovie} from "../../services/studio-ghibli";
import "./movie.css"
import {useSelector} from "react-redux";
import {IMovieState} from "../../store/reducer";
import {getTimeDuration} from "../../helper/movie-helper";

const Movie = () => {
  const movie: IMovie | undefined = useSelector((state: IMovieState) => state?.activeMovie);

  if (movie === undefined) {
    return <p>Loading...</p>
  } else {
    return <div className={"movie-container"}>
      <div>
        <Link to={"/"}>
          <Button variant="contained" color="primary" className={"back-button"}>
            Back
          </Button>
        </Link>
      </div>

      <div className={"movie-content"}>
        <h1>Name: {movie.title}</h1>
        <h2>Release date: {movie.release_date}</h2>
        <h3>Running time: {getTimeDuration(movie.running_time)}</h3>
        <hr/>
        <p>{movie.description}</p>
      </div>
    </div>
  }
}

export default Movie;