import React from 'react';
import ReactStars from "react-rating-stars-component";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';

function RateIt(){
    const [rating, setRating] = useState(null);

    const ratingReview = (rating) => {
        setRating(rating);
    }

    return (
        <>
        <ReactStars activeColor="gold" size={50} count={5} isHalf={false} onChange={ratingReview} />
        </>
    );
};

export default RateIt;
// const mapStateToProps = (state) => ({ applicationState: state });
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(RateIt);