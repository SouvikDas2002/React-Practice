import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './styles.css'

const StarRating = ({stars=5}) => {
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    // console.log(rating)
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex){
        setHover(rating)
        
    }
    // console.log(hover)
  return (
    <div className="star-rating">
        {
            [...Array(stars)].map((_,index)=>{
                index+=1
                return <FaStar
                key={index}
                className={index<=(hover || rating) ? 'active' :'inactive'}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
  )
}

export default StarRating;