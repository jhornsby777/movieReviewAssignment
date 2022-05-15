import React , {useState} from 'react'
import Stars from './Stars'

export default function ReviewForm({updateMovieReview , movie}) {

    const [reviewData , setReviewData] = useState('')

    const handleChange = (e) => {
        setReviewData(e.target.value)
    }

    const onSubmit = (movie , reviewData) =>{
        updateMovieReview(movie , reviewData);
        setReviewData('')
    }

    return (
        <div>
            <Stars></Stars>
            <textarea type = 'text' placeholder ='Leave your own review.' value = {reviewData} onChange ={handleChange} ></textarea>
            <br></br>            
            <button type ='submit' onClick = {() =>onSubmit(movie , reviewData) }>Submit your review.</button>
        </div>
    )
}
