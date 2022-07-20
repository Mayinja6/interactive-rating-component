import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/feedbackForm/FeedbackForm";
import FeedbackThanks from "./components/feedbackThanks/FeedbackThanks";

const App = () => {
  return (
    <div className="feedback_container">
      <Router>
        <Routes>
          <Route path="/" exact element={<FeedbackForm />} />
          <Route path="/option/:id" element={<FeedbackThanks />} />
        </Routes>
      </Router>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="mailto:douglasmayinja6@gmail.com">Mayinja6</a>.
      </div>
    </div>
  );
};

export default App;
