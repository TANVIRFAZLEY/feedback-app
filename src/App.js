import { useState } from 'react'
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  return (
    <>
      <Header />
      <div className="main-section">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
