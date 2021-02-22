import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/app.actions";
import axios from "axios";
import Searchbar from "./Navigation/Searchbar";
import {Form, Row, Col } from 'react-bootstrap';
import "./movie-overview.css"
import Slideshow from '../components/LandingPage/Slideshow';
import Moviecard from '../components/MovieDetailPage/Moviecard'

const MovieOverview = (props) => {
  const [movies, setMovies] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [minLimit, setMinLimit] = useState(0);
  const [maxLimit, setMaxLimit] = useState(20);

  const history = useHistory();
  useEffect(() => {
    if(!searchInput){
      getMovies();
    }
  }, [searchInput]);

  useEffect(() => {
    searchMyInput()
  }, [searchInput])
  
  const getMovies = async () => {
    const response = await axios.get(
      "https://hermes.telekurier.at/api/v1/cfs/collection/codebase_challenge"
    );
    console.log(response.data.items);
    setMovies(response.data.items);
  };
  const movieDetails = (movie) => {
    props.actions.storeMovieName(movie);
    history.push(`/movie${movie}`);
  };


  const searchMyInput = async() =>{
    const response = await axios.get(
      `https://efs.film.at/api/v1/cfs/collection/Alle%20Filme?start=${minLimit}&limit=${maxLimit}&term=${searchInput}`
    );
    console.log(response.data.items);
    setMovies(response.data.items)
  }

  return (
    <div>
      <div className= "search-inline">
        <Row>
          <Col>
          <Form inline>
            <div>Search for a movie</div>
        <Form.Control
          className="searchInput"
          type="text"
          placeholder="Search.." 
          value={searchInput}
          onChange={(e ) => {
            setSearchInput(e.target.value)
          }}
      />
      </Form>
          </Col>
          <Col>
          <Form inline>
        <div className="min-max-movie">Min movies shown</div>
        
        <Form.Control
          className="searchInput"
          type="text"
          placeholder="Min limit searches" 
          value={minLimit}
          onChange={(e ) => {
            setMinLimit(e.target.value)
          }}
      />
      </Form>
          </Col>
          <Col>
          <Form inline>
      <div className="min-max-movie">Max movies shown</div>
        <Form.Control
          className="searchInput"
          type="text"
          placeholder="Max limit searches" 
          value={maxLimit}
          onChange={(e ) => {
            setMaxLimit(e.target.value)
          }}
      />
      </Form>
          </Col>
        </Row>

      
      
      
      </div>
 
      
      <Slideshow movies={movies} />
      <Moviecard/>
    </div>
  );
};
const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieOverview);