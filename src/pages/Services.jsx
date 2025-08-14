import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
      <Navbar />
      
      <div className="flex flex-col gap-8 w-full min-h-screen px-10 justify-center items-center font-space bg-[#F0F8FF]">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-3xl">
            We provide the best <span className="text-[#28D08A]">service</span>{" "}
            solutions.
          </h1>
          <p className="text-[#4E4E4E]">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to improve our services and help our clients
            achieve their goals.
          </p>
        </div>

        <div className="flex justify-center items-center gap-10 w-full">
          <div className='flex flex-col gap-3 justify-start p-3 bg-white'>
            <img src="/images/vector1.png" alt="" />
            <div>
            <h3 className="font-semibold text-xl">Online Marketing</h3>
            <p className="text-[#4E4E4E]">
              In the new era of technology we look in the future with certainty
              and pride.
            </p>
            </div>
            <img src="/images/vector5.png" alt="" />
          </div>
          <div className='flex flex-col gap-3 justify-start p-3 bg-white'>
            <img src="/images/vector1.png" alt="" />
            <div>
            <h3 className="font-semibold text-xl">Online Marketing</h3>
            <p className="text-[#4E4E4E]">
              In the new era of technology we look in the future with certainty
              and pride.
            </p>
            </div>
            <img src="/images/vector5.png" alt="" />
          </div>
          <div className='flex flex-col gap-3 justify-start p-3 bg-white'>
            <img src="/images/vector1.png" alt="" />
            <div>
            <h3 className="font-semibold text-xl">Online Marketing</h3>
            <p className="text-[#4E4E4E]">
              In the new era of technology we look in the future with certainty
              and pride.
            </p>
            </div>
            <img src="/images/vector5.png" alt="" />
          </div>
          <div className='flex flex-col gap-3 justify-start p-3 bg-white'>
            <img src="/images/vector1.png" alt="" />
            <div>
            <h3 className="font-semibold text-xl">Online Marketing</h3>
            <p className="text-[#4E4E4E]">
              In the new era of technology we look in the future with certainty
              and pride.
            </p>
            </div>
            <img src="/images/vector5.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services