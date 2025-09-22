import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

const FetchedData = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/comments");
        setComments(res.data.comments);
        setLoading(false);
      } catch (error) {
        setError(true)
        setErrorMessage(error.message)
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    };
    dataFetch();
  }, []);

  const generateInitials = (name) => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  if (error) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
        <p className="text-center text-3xl font-medium">Error occurred</p>
        <p className="text-center text-xl font-medium">{errorMessage}</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center md:h-[700px] items-center gap-4 mt-2 px-10 py-20 md:py-10 bg-white font-space">
      {loading ? (
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#28D08A"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div className="grid md:grid-cols-3 gap-4 md:gap-10 py-15 md:py-0">
          {comments.slice(0, 6).map((comment) => (
            <div className="flex flex-col rounded-lg shadow-md hover:shadow-gray-300 p-5 gap-3 scale-90 hover:scale-100 transition-all duration-1000">
              <div>
                <img src="images/stars.png" alt="" />
              </div>
              <div>
                “We struggled for years to find an IT company that we could
                trust. While others would try to sell us IT solutions. We
                actually took the time to listen to what made us unique as a
                business.”
              </div>
              <div className="flex justify-start items-center gap-7">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#F0F8FF] text-[#28D08A] font-bold text-2xl">
                  {generateInitials(comment.user.fullName)}
                </div>
                <div className="font-semibold">{comment.user.fullName}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FetchedData;
