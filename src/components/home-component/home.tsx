import {useEffect, useState} from "react";
import {fetchMovies, IMovie} from "../../services/studio-ghibli";
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./home.css";
import {useDispatch, useSelector} from "react-redux";
import {IMovieState} from "../../store/reducer";
import {setActiveMovieAction, setMoviesAction} from "../../store/reducer.actions";
import {getTimeDuration} from "../../helper/movie-helper";

const Home = () => {
  const [movies, setMovies] = useState(useSelector((state: IMovieState) => state?.movies));
  const dispatch = useDispatch()

  const fetchMoviesAPI = async () => {
    const data = await fetchMovies();
    setMovies(data);
    dispatch(setMoviesAction(data));
  }

  useEffect(() => {
    if (!movies || movies?.length === 0) {
      fetchMoviesAPI();
    }
  }, []);

  const content = <div>
    <Typography variant="h6" className={"font-dosis"}>
      List of movies:
    </Typography>
    <div>
      <List>
        {
          movies?.map(movie => {
            return <ListItem key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <ListItemText
                    className={"font-dosis"}
                    primary={movie.title}
                    secondary={getTimeDuration(movie.running_time)}
                    onClick={() => dispatch(setActiveMovieAction(movie))}
                />
              </Link>
            </ListItem>
          })
        }
      </List>
    </div>
  </div>

  const loading = <div className="loader"></div>

  return <>
    {
      movies?.length > 0
          ? <div className={"home-container"}>
            {content}
          </div>
          : loading
    }
  </>
}

export default Home;