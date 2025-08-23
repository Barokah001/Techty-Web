import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchedData = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/comments');
        setComments(res.data.comments)
      } catch (error) {
        console.log(error.message)
      }
    };
    dataFetch()

  }, [])

  const generateInitials = (name)=> {
        const words = name.trim().split(" ");
        if (words.length === 1) return words[0][0].toUpperCase();
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-10 py-15 px-5 md:px-20">
      {comments.slice(0, 6).map((comment) => (
        <div className="flex flex-col rounded-lg shadow-md hover:shadow-gray-300 p-5 gap-3">
          <div>
            <img src="images/stars.png" alt="" />
          </div>
          <div>
            “We struggled for years to find an IT company that we could trust.
            While others would try to sell us IT solutions. We actually took the
            time to listen to what made us unique as a business.”
          </div>
          <div className="flex justify-start items-center gap-7">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#F0F8FF] text-[#28D08A] font-bold text-2xl">
            {generateInitials(
              comment.user.fullName
            )}
          </div>
            <div className="font-semibold">{comment.user.fullName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchedData;
