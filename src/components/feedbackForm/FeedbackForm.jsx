import "./FeedbackForm.css";
import feedbackForm_star from "../../images/icon-star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const FeedbackForm = () => {
  const [activeOption, setActiveOption] = useState(null);

  return (
    <div className="feedbackForm">
      <div className="feedbackForm_star">
        <img src={feedbackForm_star} alt="feedbackForm_star" />
      </div>
      <p className="feedbackForm_title">How did we do?</p>
      <p className="feedbackForm_text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="feedbackForm_rating_container">
        {[1, 2, 3, 4, 5].map((rating) => {
          return (
            <span
              className={`feedbackForm_rating_option ${
                activeOption === rating ? "active" : ""
              }`}
              key={rating}
              onClick={() => setActiveOption(rating)}
            >
              <span className="feedbackForm_rating_option_number">
                {rating}
              </span>
            </span>
          );
        })}
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to={activeOption === null ? "/" : `/option/${activeOption}`}
      >
        <button className="feedbackForm_button">
          <span>Submit</span>
        </button>
      </Link>
    </div>
  );
};

export default FeedbackForm;
