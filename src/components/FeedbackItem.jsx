import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {

    return (
        <div className="feedback-card">
            <div className="feedback-rating">{item.rating}</div>
            <div className="feedback-desc">{item.desc}</div>
            <button onClick={() => handleDelete(item.id)} className="close-btn"><FaTimes /></button>
            <div className="username">{item.name}</div>
        </div>
    )
}

export default FeedbackItem