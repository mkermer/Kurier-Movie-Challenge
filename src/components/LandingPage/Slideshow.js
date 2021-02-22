import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import ShowRating from '../Rating/ShowRating';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';
import './Slideshow.css'

function Slideshow(props){
    const movies = props.movies;
    return(
        <Carousel className="Slideshow">

            {movies.map(movie => {
                return (
                    <Carousel.Item>
                        <Row>
                            <Col className="noPad">
                                <img
                                    className="d-block w-100"
                                    src={"https://hermes.telekurier.at"
                                        + movie.poster.url}
                                    alt="First slide"
                                />
                            </Col>
                            <Col className="dark">
                                <div>
                            <a href={`/movie${movie.url}`}> {movie.title} </a> 
                            <ShowRating/>
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
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch),});
export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);