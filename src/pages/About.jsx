import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar style={"bg-[#F0F8FF]"} />
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 items-start py-10 md:h-[600px] w-full px-10 font-space bg-[#F0F8FF]">
        <img src="/images/frame1.png" className="md:h-[500px]" />
        <div className="flex flex-col gap-7 w-full text-justify">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">
              <span className="text-[#28D08A]">About</span> Techty
            </h1>
            <p className="w-85 md:w-120">
              We're constantly pushing the boundaries of what's possible and
              seeking new ways to improve our services and help our clients
              achieve their goals.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="w-85 md:w-120">
              Our vision is to create a better financial future for everyone. We
              believe that everyone deserves access to financial services and
              resources that empower them to achieve their goals.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="w-85 md:w-120">
              We're on a mission to empower people to take control of their
              finances and achieve their goals. We believe that everyone should
              have access to the tools and resources they have and make smart
              financial decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start py-15 px-10 bg-[#FFFFFF] font-space w-full min-h-screen text-justify">
        <div className="flex flex-col gap-4 items-start text-[#4E4E4E] md:w-1/2">
          <h2 className="font-semibold text-xl text-black">
            Message from <span className="text-[#28D08A]">Founder</span>
          </h2>
          <p className="w-85 md:w-115">
            I would like to take a moment to express my sincere gratitude for
            choosing our IT services. As the founder of this company, I am proud
            to say that we are committed to providing the best possible
            solutions for your business needs.
          </p>
          <p className="w-85 md:w-115">
            We understand the challenges that come with managing an enterprise
            in the digital age, and we are dedicated to delivering innovative
            and reliable IT services to help you navigate these challenges with
            ease.
          </p>
          <p className="w-85 md:w-115">
            Our team of experts is constantly working to improve our services
            and stay up-to-date with the latest technological advancements. We
            strive to provide personalized solutions that cater to your specific
            requirements, ensuring that your business operations run smoothly
            and efficiently.
          </p>

          <div>
            <h3 className="text-l font-semibold">John Willams</h3>
            <p>Founder, Ceo</p>
          </div>
        </div>

        <div>
          <img src="/images/frame2.png" alt="" className="md:h-[550px] mt-5 md:mt-0" />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center px-10 py-15 w-full font-space">
        <h1 className="justify-center items-center w-100 text-center text-3xl font-bold">
          Our <span className="text-[#28D08A]"> team</span> behind all the
          success we have
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/frame3.png" alt="" />
            <h3 className="font-bold text-l">Hyeon Vivek</h3>
            <p className="text-[#4E4E4E]">Financial Consultant</p>
          </div>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/frame4.png" alt="" />
            <h3 className="font-bold text-l">Hyeon Vivek</h3>
            <p className="text-[#4E4E4E]">Financial Consultant</p>
          </div>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/frame3.png" alt="" />
            <h3 className="font-bold text-l">Hyeon Vivek</h3>
            <p className="text-[#4E4E4E]">Financial Consultant</p>
          </div>
          <div className="flex flex-col gap-3 rounded-md">
            <img src="/images/frame4.png" alt="" />
            <h3 className="font-bold text-l">Hyeon Vivek</h3>
            <p className="text-[#4E4E4E]">Financial Consultant</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About