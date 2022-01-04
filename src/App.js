import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm';
import FeedBackList from "./components/FeedBackList";
import FeedbackStatus from './components/FeedbackStatus';
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  const feedbackDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStatus feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={feedbackDelete} />
      </div>
    </>
  );
}

export default App;
