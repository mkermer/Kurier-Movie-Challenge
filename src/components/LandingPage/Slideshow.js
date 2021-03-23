import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import ShowRating from '../Rating/ShowRating';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';
import './Slideshow.css'

function Slideshow(props) {
    const movies = props.movies;
    return (
        <Carousel className="Slideshow">

            {movies.map(movie => {
                return (
                    <Carousel.Item>
                        <Row>
                            <Col className="noPad" md={4}>
                                <a href={`/movie${movie.url}`}>
                                    <img
                                        className="d-block w-100 poster"
                                        src={"https://hermes.telekurier.at"
                                            + movie.poster.url}
                                        alt="Movie Poster"
                                    />
                                </a>
                            </Col>
                            <Col className="dark" md={8}>
                                <div>
                                    <h3><a href={`/movie${movie.url}`} className="Movielink"> {movie.title} </a></h3>
                                    <ShowRating />
                                    <p>{movie.teaser_text}</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}


const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch), });
export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);