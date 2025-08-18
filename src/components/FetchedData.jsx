import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchedData = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/posts');
        setPosts(res.data.posts)
      } catch (error) {
        console.log(error.message)
      }
    };
    dataFetch()

  }, [])
  return (
    <div className='grid grid-cols-3 gap-10 p-5 px-10'>
      {posts.map((post) =>(
        <div className='flex flex-col rounded-lg shadow-md hover:shadow-gray-300'>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>{post.reaction}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchedData;
