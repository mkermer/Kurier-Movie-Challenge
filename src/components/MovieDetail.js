import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/app.actions";
import axios from "axios";

function MovieDetail(props) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovie();
    console.log(movie);
  }, []);

  const getMovie = async () => {
    const response = await axios.get(
      `https://hermes.telekurier.at/api/v1/cfs/route?uri=/filmat${props.applicationState.movie}`
    );
    console.log(response.data.layout.center[0]);
    setMovie(response.data.layout.center[0]);
  };

  return movie ? (
    <div>
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
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
