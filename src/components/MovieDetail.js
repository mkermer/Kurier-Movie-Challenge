import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/app.actions";
import axios from "axios";
import RateIt from './Rating/RateIt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Movie.css'

function MovieDetail(props) {
  const [movie, setMovie] = useState({
    title: "",
    directors: [],
    authors: [],
    cast: [],
    release_year: "",
    imdb_rating: 0,
    genres: [],
    trailer: {},

  });
  const [avgRat, setAvgRat] = useState();

  useEffect(() => {

    getMovie();
    getAverageRating();
    console.log(movie);
  }, []);

  const getMovie = async () => {
    const response = await axios.get(
      `https://hermes.telekurier.at/api/v1/cfs/route?uri=/filmat${props.applicationState.movie}`
    );
    console.log(response.data.layout.center[0]);
    setMovie(response.data.layout.center[0]);
  };

  const getAverageRating = async () => {
    const response = await axios.get('http://localhost:8080/rating/averageRating/' + movie.title)
    const average = response.data
    console.log(average.average)
    setAvgRat(average.average)
  }
  return movie ? (
    <div>
      <RateIt movie={movie} />
      <h1>{movie.title}</h1>
      <h2>Directors:</h2>
      <p>
        {movie.directors.map((item) => (
          <p>{item.name}</p>
        ))}
      </p>
      <h2>Authors:</h2>
      <p>
        {movie.authors.map((item) => (
          <p>{item.name}</p>
        ))}
      </p>
      <p>Release year: {movie.release_year}</p>
      <p>Rating: {movie.imdb_rating}</p>
      <div>
        <h2>Cast:</h2>
        {movie.cast.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
      <h2>Genres:</h2>
      {movie.genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
      <img src={movie.trailer.img ? movie.trailer.img.url : null} />
      <video
        src={movie.trailer.video ? movie.trailer.video.video_url : null}
        controls
        height="300px"
      />
      <FontAwesomeIcon icon={faStar} className={avgRat > 0 ? 'blue' : ''} />
      <FontAwesomeIcon icon={faStar} className={avgRat > 1 ? 'blue' : ''} />
      <FontAwesomeIcon icon={faStar} className={avgRat > 2 ? 'blue' : ''} />
      <FontAwesomeIcon icon={faStar} className={avgRat > 3 ? 'blue' : ''} />
      <FontAwesomeIcon icon={faStar} className={avgRat > 4 ? 'blue' : ''} />
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
