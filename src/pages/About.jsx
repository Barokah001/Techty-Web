import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start py-10 h-[600px] w-full px-10 font-space bg-[#F0F8FF]">
        <div className="w-full">
          <img src="/images/frame1.png" className="h-[500px]" />
        </div>
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">
              <span className="text-[#28D08A]">About</span> Techty
            </h1>
            <p className="w-120">
              We're constantly pushing the boundaries of what's possible and
              seeking new ways to improve our services and help our clients
              achieve their goals.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="w-120">
              Our vision is to create a better financial future for everyone. We
              believe that everyone deserves access to financial services and
              resources that empower them to achieve their goals.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="w-120">
              We're on a mission to empower people to take control of their
              finances and achieve their goals. We believe that everyone should
              have access to the tools and resources they have and make smart
              financial decisions.
            </p>
          </div>
        </div>
      </div>


      <div className='flex justify-center items-center px-10 '>

      </div>
      <Footer />
    </>
  );
}

export default About