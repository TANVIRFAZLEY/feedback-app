import FeedbackItem from "./FeedbackItem";
//import FeedBackData from './data/FeedBackData'


function FeedBackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <h3 className="no-feedback">No Feedback yet !</h3>
    }
    return (
        <div className="feedback-container">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default FeedBackList
