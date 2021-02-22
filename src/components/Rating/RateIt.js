import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';
import axios from 'axios';

function RateIt(props) {
    const [rate, setRating] = useState(null);
    const [disable, setDisable] = useState(false)
    const movie = props.movie;

    useEffect(() => {
        checkRating();
    }, [])

    const ratingReview = (rating) => {
        setRating(rating);
    }

    const checkRating = async () => {
        try {
            const response = await axios.get('http://localhost:8080/rating');
            const ratings = response.data;
            const filteredRatings = ratings.filter((rating) => props.applicationState.user.username === rating.username &&
                movie.title === rating.movie);

            if (filteredRatings.length > 0) {
                setDisable(true)
            }

        } catch (err) {

        }

    }

    const addRating = async () => {
        if (props.applicationState.user.username !== undefined) {


            const newRating = {
                movie: movie.title,
                user: props.applicationState.user.username,
                rating: rate
            }
            try {
                const response = await axios.post('http://localhost:8080/rating/post', newRating);
                console.log(response.data)
            } catch (err) {

            }


        }

    }

    return (
        <>
            <ReactStars activeColor="gold" size={50} count={5} isHalf={false} onChange={ratingReview} />
            <button onClick={addRating} disabled={disable}>rate the movie</button>
        </>
    );
};


const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(RateIt);