import React , {useState} from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import Stars from './Stars'

export default function Movie({movie , updateMovieReview}) {

    const [review , setReview] = useState(' ')


    return (
        <div>
            <img src = {movie.imageSrc}></img>
            <div><p>{movie.synopsis}</p></div>
            <div><ReviewList reviews = {movie.reviews}></ReviewList></div>
            <div><ReviewForm updateMovieReview={updateMovieReview} movie = {movie}></ReviewForm></div>
        </div>
    )
}
