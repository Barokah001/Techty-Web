import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-7 items-center justify-center px-5 md:px-10 py-15 bg-[#F1F1F1] font-space ">
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <h1 className="text-3xl font-bold">Our Blog</h1>
          <p className="w-100">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to improve our services.
          </p>
        </div>

        <div className="flex justify-center items-center gap-10 bg-[#ffffff] rounded-lg w-full">
          <div className='hidden md:flex'>
            <img src="/images/blogsc.png" alt="" />
          </div>

          <div className="flex flex-col gap-4 md:gap-7 justify-start text-start px-3 py-8 w-full md:w-1/2">
            <h1 className="text-xl">May 30, 2023</h1>
            <h1 className="text-3xl md:text-5xl font-semibold w-80 md:w-140">
              5 reasons why Techty is the go-to choice for small business.
            </h1>
            <p className="text-xl w-80 md:w-140">
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 mt-2 px-5 md:px-10 py-20 bg-[#F1F1F1] font-space">
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <h1 className="text-3xl font-bold">Read All Articles</h1>
          <p className="w-100">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to improve our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col rounded-md gap-4 bg-white">
            <img src="/images/blog1.png" alt="" />
            <p className='px-3'>May 05,2023</p>
            <h3 className="px-3 font-semibold">
              5 reasons why Techty is the go- to choice for small busines
            </h3>
            <p className='px-3 pb-5'>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>

          <div className="flex flex-col rounded-md gap-4 bg-white">
            <img src="/images/blog2.png" alt="" />
            <p className='px-3'>May 05,2023</p>
            <h3 className="px-3 font-semibold">
              5 reasons why Techty is the go- to choice for small busines
            </h3>
            <p className='px-3 pb-5'>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>

          <div className="flex flex-col rounded-md gap-4 bg-white">
            <img src="/images/blog3.png" alt="" />
            <p className='px-3'>May 05,2023</p>
            <h3 className="px-3 font-semibold">
              5 reasons why Techty is the go- to choice for small busines
            </h3>
            <p className='px-3 pb-5'>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>

          <div className="flex flex-col rounded-md gap-4 bg-white">
            <img src="/images/blog1.png" alt="" />
            <p className='px-3'>May 05,2023</p>
            <h3 className="px-3 font-semibold">
              5 reasons why Techty is the go- to choice for small busines
            </h3>
            <p className='px-3 pb-5'>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>

          <div className="flex flex-col rounded-md gap-4 bg-white">
            <img src="/images/blog2.png" alt="" />
            <p className='px-3'>May 05,2023</p>
            <h3 className="px-3 font-semibold">
              5 reasons why Techty is the go- to choice for small busines
            </h3>
            <p className='px-3 pb-5'>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>

          <div className="flex flex-col rounded-md gap-4 bg-white">
            <img src="/images/blog3.png" alt="" />
            <p className='px-3'>May 05,2023</p>
            <h3 className="px-3 font-semibold">
              5 reasons why Techty is the go- to choice for small busines
            </h3>
            <p className='px-3 pb-5'>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog