function FeedbackStatus({ feedback }) {
    let avarating = feedback.reduce((previous, current) => {
        return previous + current.rating
    }, 0) / feedback.length
    avarating = avarating.toFixed(1)
    return (
        <div className="fbstatus">
            <h3 className="reviews">{feedback.length} Reviews</h3>
            <h3 className="rating">Avarage Rating: {isNaN(avarating) ? 0 : avarating}</h3>
        </div>
    )
}

export default FeedbackStatus
