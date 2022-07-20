import "./feedbackThanks.css";
import feedbackThanks_pic from "../../images/illustration-thank-you.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FeedbackThanks = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  });
  return (
    <div className="feedbackThanks">
      <div className="feedbackThanks_img">
        <img src={feedbackThanks_pic} alt="feedbackThanks_pic" />
      </div>
      <p className="feedbackThanks_selected">You selected {id} out of 5</p>
      <h2 className="feedbackThanks_thanks">Thank you!</h2>
      <p className="feedbackThanks_text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default FeedbackThanks;
