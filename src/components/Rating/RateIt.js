import React from React;
import ReactStars from "react-rating-stars-component";

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