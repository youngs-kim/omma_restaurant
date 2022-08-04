import { useState } from 'react';
import './Review.css';

const Review = () => {
  const [review, setReview] = useState('');

  return (
    <div className="review-container">
      <form className="review">
        <input type="text" value={review} />
        <label>Rating</label>
        <select>
          <option>5/5</option>
          <option>4/5</option>
          <option>3/5</option>
          <option>2/5</option>
          <option>1/5</option>
        </select>
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Review;
