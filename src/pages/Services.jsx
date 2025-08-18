import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
      <Navbar style={"bg-[#F0F8FF]"} />
      <div className="flex flex-col gap-10 w-full min-h-screen py-20 px-10 justify-center items-center font-space bg-[#F0F8FF]">
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <h1 className="font-bold text-3xl">
            We provide the best <span className="text-[#28D08A]">service</span>{" "}
            solutions.
          </h1>
          <p className="text-[#4E4E4E] w-120">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to improve our services and help our clients
            achieve their goals.
          </p>
        </div>

        <div className="flex justify-center items-center gap-10 w-full">
          <div clas5Name="flex flex-col gap-4 justify-start p-3 bg-white h-[300px]">
            <div>
              <img src="/images/vector1.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Online Marketing</h3>
              <p className="text-[#4E4E4E]">
                In the new era of technology we look in the future with
                certainty and pride.
              </p>
            </div>
            <div>
              <img src="/images/vector5.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start p-3 bg-white h-[300px]">
            <div>
              <img src="/images/vector1.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Startup Business</h3>
              <p className="text-[#4E4E4E]">
                In the new era of technology we look in the future with
                certainty and pride.
              </p>
            </div>
            <div>
              <img src="/images/vector5.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start p-3 bg-white h-[300px]">
            <div>
              <img src="/images/vector1.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Business Growth</h3>
              <p className="text-[#4E4E4E]">
                In the new era of technology we look in the future with
                certainty and pride.
              </p>
            </div>
            <div>
              <img src="/images/vector5.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start p-3 bg-white h-[300px]">
            <div>
              <img src="/images/vector1.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Development</h3>
              <p className="text-[#4E4E4E]">
                In the new era of technology we look in the future with
                certainty and pride.
              </p>
            </div>
            <div>
              <img src="/images/vector5.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full min-h-screen py-20 px-10 justify-center items-center font-space bg-[#F0F8FF]">
        <h1 className="font-bold text-3xl w-90 text-center">
          We have the best <span className="text-[#28D08A]">Pricing</span>{" "}
          package for you.
        </h1>

        <div className="flex justify-between items-start w-full bg-[#ffffff] p-10">
          <div className="flex flex-col justify-start ">
            <div className="flex flex-col gap-3 justify-start">
              <h2 className="font-semibold text-xl">On Demand</h2>
              <p className="text-[#495460] pb-3">
                Get all these features when you are using as starter.
              </p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <img src="/images/checkbox.png" alt="" />
                  <p className="text-[#4E4E4E]">Unlimited Projects</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/checkbox.png" alt="" />
                  <p className="text-[#4E4E4E]">Analytics dashboard</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/checkbox.png" alt="" />
                  <p className="text-[#4E4E4E]">Unlimited Projects</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <img src="/images/closebox.png" alt="" />
                  <p className="text-[#4E4E4E]">Insights panel</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/closebox.png" alt="" />
                  <p className="text-[#4E4E4E]">Email notifications</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/closebox.png" alt="" />
                  <p className="text-[#4E4E4E]">Share features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center bg-[#F0F8FF] rounded-lg p-8">
            <h1 className="font-semibold text-2xl">Quick Solutions</h1>
            <div className="flex">
              <h1 className="font-bold text-5xl">$20</h1>
              <p className="font-semibold text-2xl">/hour</p>
            </div>
            <button className="w-90 bg-[#28D08A] text-white p-2 rounded-md cursor-pointer">
              Hire an Expert
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start w-full bg-[#ffffff] p-10">
          <div className="flex flex-col justify-start ">
            <div className="flex flex-col gap-3 justify-start">
              <h2 className="font-semibold text-xl">On Maintenance</h2>
              <p className="text-[#495460] pb-3">
                Get all these features when you are using as starter.
              </p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <img src="/images/checkbox.png" alt="" />
                  <p className="text-[#4E4E4E]">Unlimited Projects</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/checkbox.png" alt="" />
                  <p className="text-[#4E4E4E]">Analytics dashboard</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/checkbox.png" alt="" />
                  <p className="text-[#4E4E4E]">Unlimited Projects</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <img src="/images/closebox.png" alt="" />
                  <p className="text-[#4E4E4E]">Insights panel</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/closebox.png" alt="" />
                  <p className="text-[#4E4E4E]">Email notifications</p>
                </div>
                <div className="flex gap-2">
                  <img src="/images/closebox.png" alt="" />
                  <p className="text-[#4E4E4E]">Share features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center bg-[#F0F8FF] rounded-lg p-8">
            <h1 className="font-semibold text-2xl">Quick Solutions</h1>
            <div className="flex">
              <h1 className="font-bold text-5xl">$20</h1>
              <p className="font-semibold text-2xl">/hour</p>
            </div>
            <button className="w-90 bg-[#28D08A] text-white p-2 rounded-md cursor-pointer">
              Hire an Expert
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services