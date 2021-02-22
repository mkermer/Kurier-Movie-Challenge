import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/app.actions";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import MovieTrailers from './MovieDetailPage/MovieTrailers'


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
      <Container>
      <Row>
        <Col sm={8}>
        <video
        src={movie.trailer.video ? movie.trailer.video.video_url : null}
        controls
        height="300px"
      />
        </Col>
        <Col sm={4}>
        <h3>{movie.title}</h3>
      <h3>Directors:</h3>
      <p>
        {movie.directors.map((item) => (
          <p>{item.name}</p>
        ))}
      </p>
      <p>Release year: {movie.release_year}</p>
        <h2>Cast:</h2>
        {movie.cast.map((item) => (
          <p>{item.name}</p>
        ))}
      <h2>Genres:</h2>
      {movie.genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
        </Col>
      </Row>
    </Container>
      <MovieTrailers movie={movie} />

      
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
