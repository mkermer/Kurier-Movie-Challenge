import React from 'react';
import { Carousel } from 'react-bootstrap';
import ShowRating from '../Rating/ShowRating';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';

function Slideshow(){
    return(
        <Carousel>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src=""
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Movie Title</h3>
                <ShowRating/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slideshow;

// const mapStateToProps = (state) => ({ applicationState: state });
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);