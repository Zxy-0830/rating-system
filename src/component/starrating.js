import Star from './Star';
import {useState} from 'react';

function StarRating() {
    const [rating, setRating] = useState('');
    const [selctedIndex, setSelctedIndex] = useState(-1);
    const word = ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'];
    function ratingSystem(a, b) {
        setRating(a); setSelctedIndex(b);
    }
    return (
       <div className='rating'>
        <div className='ratingpro'>
         {word.map((a, b) => (<Star key={b} click={() => ratingSystem(a, b)} selcted={b <= selctedIndex}/>))}
        </div>
        <h2>{rating}</h2>
       </div>
    )
}

export default StarRating;