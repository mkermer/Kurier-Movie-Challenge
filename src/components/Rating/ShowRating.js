import React from 'react';
import './ShowRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';

function ShowRating(props){
  

    return (
        <>
        <h2>Overall Rating</h2>
            {/* <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 0 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 1 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 2 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 3 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 4 ? 'gold' : ''} /> */}
        </>
    );
};

export default ShowRating;

// const mapStateToProps = (state) => ({ applicationState: state });
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ShowRating);