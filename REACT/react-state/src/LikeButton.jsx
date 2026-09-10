import { useState } from "react";

export default function LikeButton() {
  let [isLiked , setIsLiked] = useState(false);
  
  let toggleLiked = () => {
    setIsLiked(!isLiked);
  }

  return(
    <div>
      <p onClick={toggleLiked}>
        {
          isLiked ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )
        }
      </p>
    </div>
  )
}