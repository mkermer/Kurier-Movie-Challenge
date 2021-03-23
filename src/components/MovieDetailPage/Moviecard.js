
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';

import { Card, Button } from "react-bootstrap";



function Moviecard(props) {

  const [movies, setMovies] = useState([]);
  
    const history = useHistory();
  
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
  
    const movieDetails = (movie) => {
      props.actions.storeMovieName(movie);
      history.push(`/movie${movie}`);
    };

  return (
    
    <div className="container">
        {movies.map( (movie) => {
          return( 
              <div className="grid-container"> 
              
                <Card className="movieCardBox" style={{ width: "10rem" , height: "32rem"}}>
                <Card.Img variant="top" src={"https://hermes.telekurier.at" + movie.poster.url}
                  style={{ width: "100%", height:"230px"}}
                  alt={"poster"} />
                <Card.Body>
                  <Card.Title className="movieCardTitle">
                  {movie.title}
                  </Card.Title>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>

                  <Card.Text className="movieCardDescription">
                  {movie.teaser_text} 
                  </Card.Text>
                  {/* <Button variant="primary" onClick={() => movieTeaser(movie.teaser_video.video_url)}>Watch Trailer</Button> */}
                </Card.Body>
                <Button variant="primary" onClick={() => movieDetails(movie.url)}>View Details</Button>

                </Card>
            </div>
          )
        })}
    </div>
    
  )
}


const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Moviecard);


