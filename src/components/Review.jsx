import { useState } from 'react';
import './Review.css';

const Review = () => {
  const [review, setReview] = useState('');

  return (
    <div className="review-container">
      <div className="review-star">
        <label>Rating(5/)</label>
        <select>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>
      <form className="review">
        <input type="text" value={review} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Review;
