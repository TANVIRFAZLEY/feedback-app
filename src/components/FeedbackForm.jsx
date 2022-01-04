import { useState } from 'react'
import FeedbackRatingSelected from './FeedbackRatingSelected'

function FeedbackForm({ handleAdd }) {
    const [text, setRatingText] = useState('')
    const [name, setNameText] = useState('')
    const [rating, setSelected] = useState(10)
    const [btnDisable, setbtnDisable] = useState(true)
    const [warning, setWarning] = useState('')
    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisable(true)
            setWarning(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisable(true)
            setWarning('At least 10 carecters')
        } else {
            setbtnDisable(false)
            setWarning(null)
        }
        setRatingText(e.target.value)
    }
    const handleNameChange = (e) => {
        setNameText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                rating,
                name,
                text,
            }
            handleAdd(newFeedback)
            setRatingText('')
            setNameText('')
        }
    }


    return (

        <div className="feedback-form">
            <form onSubmit={handleSubmit}>
                <h3>Give our service rating</h3>
                <FeedbackRatingSelected select={(rating) => setSelected(rating)} />
                <div className="input-group">
                    <input required value={name} onChange={handleNameChange} type="text" placeholder='Your Name' name='' id='' />
                    <textarea onChange={handleTextChange} value={text} placeholder="Write a review" name="" id=""></textarea>
                    <button disabled={btnDisable} type="submit" className="btn-submit">Submit</button>
                    <div className="setwarning">{warning}</div>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm
