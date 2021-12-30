function FeedbackItem({ item }) {

    return (
        <div className="feedback-card">
            <div className="feedback-rating">{item.rating}</div>
            <div className="feedback-desc">{item.desc}</div>
            <div className="username">{item.name}</div>
        </div>
    )
}

export default FeedbackItem