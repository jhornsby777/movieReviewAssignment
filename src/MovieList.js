import React , {useState} from 'react'
import Movie from './Movie';

let k = 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'

let e = "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."

let l = "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"

let n = "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."

const movies = [{imageSrc: k , synopsis: e , rating: 5 , reviews:['Nice ' , 'Decent ']} , 
{imageSrc: l, synopsis: n , rating: 4 , reviews:['Good ' , 'Bad '] }];

export default function MovieList() {

    const [movieState , setMovieState] = useState(movies)

    const updateMovieReview = (movie , review) => {
        let tempMovie = {...movie}
        let tempMovieState = [...movieState]
        let movieIndex = tempMovieState.find((movie) => movie === tempMovie)
        tempMovie.reviews.push(review)
        tempMovieState.splice(movieIndex , 1 , tempMovie)
        setMovieState(tempMovieState)
    }

    return (
        <div>
            {movieState.map(( movie ) => {
                return <Movie key = {movie.imageSrc} movie={movie} updateMovieReview={updateMovieReview}></Movie>
            } )} 
        </div>
    )
}