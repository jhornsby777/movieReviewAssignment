import React , {useState} from 'react'
import Review from './Review'

export default function ReviewList({reviews}) {
    return (
        <div>
            {reviews.map( (review) => {
                return(
                    <Review reviewText = {review}></Review>
                )
            })}
        </div>
    )
}
