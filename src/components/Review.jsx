import { useState } from 'react';
import './Review.css';

const Review = () => {
  const [review, setReview] = useState('');

  return (
    <div className="review-container">
      <form>
        <input type="text" value={review} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Review;
