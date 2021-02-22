import React from 'react';
import { Carousel } from 'react-bootstrap';
import ShowRating from '../Rating/ShowRating';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';

function Slideshow(props){
    const movies = props.movies;
    return(
        <Carousel>
            {movies.map(movie => {
                return (
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={"https://hermes.telekurier.at"
                                    + movie.poster.url}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <a href="/movie/{movie.title}"> {movie.title} </a> 
                        <ShowRating/>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

// export default Slideshow;

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);