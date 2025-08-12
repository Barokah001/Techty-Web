import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchedData = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/posts");

      } catch (error) {
        console.log(error.message);
      }
    };
    dataFetch();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {comments.map((comment) => (
          <div className="flex flex-col p-3 gap-4 rounded-md shadow-xl border-1">
            <p>{comment.id}</p>
            <p>{comment.title}</p>
            <p>{comment.body}</p>
            <p>{comment.view}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchedData;
