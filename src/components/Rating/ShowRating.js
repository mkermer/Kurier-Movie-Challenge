import React from React;
import './ShowRating.css'

function ShowRating(){
  

    return (
        <>
        <h2>Overall Rating</h2>
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 0 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 1 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 2 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 3 ? 'gold' : ''} />
            <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 4 ? 'gold' : ''} />
        </>
    );
};

export default ShowRating;