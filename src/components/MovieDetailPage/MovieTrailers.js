import React, {useState, useEffect}from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import movieTrailer from './MovieTrailers';
import Navigation from '../Navigation/Navigation';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from 'axios';


const MovieTrailers = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios.get(
      "https://hermes.telekurier.at/api/v1/cfs/collection/codebase_challenge"
    );
    console.log(response.data.items);
    setMovies(response.data.items);
  };

  return (
    <div>
    <h3>Movie Trailers</h3>
    <CardDeck>
      {movies.map(movie => {
        return (
          <Col lg={4} md={6} sm={12}>
        <Card style={{height: '350px', textAlign: 'center'}}>
          <Card.Img variant="top" src={'https://hermes.telekurier.at' + movie.poster.url} style={{width: '50px'}} alt='poster' />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>
              {movie.teaser_text}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Col>
        )
      })}
      </CardDeck>
      </div>

  );
};

export default MovieTrailers;