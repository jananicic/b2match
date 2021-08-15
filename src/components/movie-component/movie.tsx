interface IProps {
  match: any;
}

const Movie = ({match}: IProps) => {
  return <>
    <h1>MOVIE PAGE {match.params.id}</h1>
  </>
}

export default Movie;