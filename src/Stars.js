import React , {useState} from 'react' 
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';

export default function Stars() { 

    const [rating , setRating] = useState(0)
    const [hoverRating , setHoverRating] = useState(0)

    return (
        <div>
            {[1,2,3,4,5].map( (star , index) => {
                index+=1
                return(
                    <button 
                        type = 'button' 
                        key={index}
                        onClick = {() => setRating(index)} 
                        onMouseEnter = {() => setHoverRating(index)} 
                        onMouseLeave = {() => setHoverRating(rating)}
                    >
                        {/* https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6*/}
                        {index <= (hoverRating || rating) ? <Star></Star> : <StarOutline></StarOutline>}
                    </button>
                )
            })}
        </div>
    )
}