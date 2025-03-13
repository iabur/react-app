import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function Like() {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {liked ? (
        <FaHeart size={500} color="#ff6b81" onClick={() => setLiked(false)} />
      ) : (
        <CiHeart size={500} onClick={() => setLiked(true)} />
      )}
    </div>
  );
}

export default Like;
