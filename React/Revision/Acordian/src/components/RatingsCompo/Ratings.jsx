import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import "./ratings.css"
function Ratings({totalStar = 5}){
    const [ratings,setRatings] = useState(0)
    const [currMovingIdx,setCurrMovingIdx] = useState(0)
    function handleClick(idx){
        if(idx == ratings){
            setRatings(0)
            setCurrMovingIdx(0)
        }
        else{
            setRatings(idx)
        }
    }
    function handleMouseMove(idx){
        setCurrMovingIdx(idx)
    }
    function handleMouseLeave(){
        setCurrMovingIdx(ratings)
    }
    return(
        <div >
            {
                [...Array(totalStar)].map((_, i)=>{
                    return <FaStar
                    size = {50}
                    className = {(i+1 <= ratings ||i+1 <= currMovingIdx)? "active" :"inactive"}
                    key = {i}
                    onClick={()=>handleClick(i+1)}
                    onMouseMove={()=>handleMouseMove(i+1)}
                    onMouseLeave={()=>handleMouseLeave()}
                    />
                })
            }
        </div>
    )
}
export default Ratings


