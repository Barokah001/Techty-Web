import React from 'react'
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FetchedData from '../components/FetchedData';
import ServiceStates from '../components/ServiceStates';

const Homepage = () => {
  return (
    <section className="font-space">
      <Navbar style={"bg-[#F0F8FF]"} />
      <div className="bg-[#F0F8FF] h-screen px-10 md:px-20 font-space">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start text-center md:text-start">
            <h1 className="text-3xl font-semibold md:text-4xl md:font-bold pb-5 md:pb-15">
              Secure <span className="text-[#28D08A]">business</span> <br />
              with Techty security.
            </h1>
            <p className="pb-8 w-[80%]">
              We have considered our solutions to support every stage of your
              growth. We are the fastest and easiest way to launch an attractive
              and feature-complete SaaS showcase.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <Button
                name="Request a Demo"
                style={"bg-black hover:bg-[#28D08A] "}
              />
              <Button
                name="Hire an Expert"
                style={"bg-[#28D08A] hover:bg-black"}
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center  rounded-md bg-white">
              <img
                src="/images/heroSc.png"
                alt=""
                className="rounded-md w-[860px] p-1"
              />
            </div>
            <div className="flex justify-center items-center gap-2 py-2">
              <img src="images/Star.png" alt="" />
              <h3 className="font-semibold text-normal">Trustpilot</h3>
              <img src="/images/stars.png" alt="" />
              <p className="text-xs">4900 + 310</p>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 w-[90%] my-5" />

        <div className="flex flex-col gap-3 md:flex-row  md:justify-between items-center">
          <div>
            <p className="text-xl">Thousands of businesses use Techty</p>
          </div>
          <div>
            <marquee behavior="scroll" direction="left">
              <img src="/images/marquee.png" alt="" />
            </marquee>
          </div>
        </div>
      </div>

      <ServiceStates />

      <div className="flex flex-col md:flex-row items-center justify-betweem w-full bg-[#F0F8FF] gap-5 md:h-[320px] px-10 md:px-20 py-10 ">
        <div className="pr-10">
          <h1 className="text-2xl font-bold">
            {" "}
            <span className="text-[#28D08A]">Unleash </span> businesses' full
            potential
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <img src="/images/iconTT.png" alt="" className="w-[80px] h-[80px]" />
          <h3 className="font-semibold text-xl">SEO Team Expert</h3>
          <p className="w-[85%]">
            Creating products to meet our user needs and market demands.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <img src="/images/iconO.png" alt="" className="w-[80px] h-[80px]" />
          <h3 className="font-semibold text-xl">Strategic Planning</h3>
          <p className="w-[85%]">
            Improving products to meet our user needs and market demands.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <img src="/images/iconT.png" alt="" className="w-[80px] h-[80px]" />
          <h3 className="font-semibold text-xl">24/7 Live Support</h3>
          <p className="w-[85%]">
            We are ready to help you all day and our customer service are active
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-7 my-15 px-10 md:px-20">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-semibold md:font-bold pb-5 md:pb-15">
            Our most priority is to provide the effective{" "}
            <span className="text-[#28D08A]">solutions.</span>
          </h1>
          <p className="pb-4 md:pb-8 w-90 md:w-[80%] text-align">
            With a library full of thousands of templates to choose from, go
            idea to launch in a matter of minutes. Try uploading your own for
            sale.
          </p>

          <div className="flex gap-6">
            <Button />
          </div>
        </div>
        <div className="w-3/4 hidden md:flex">
          <img src="/images/demoImg.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#171A1F] text-white py-10 md:py-0 px-10 md:px-20">
        <div className="hidden md:flex items-start justify-start left-0 top-0">
          <img src="/images/Rectangle.png" alt="" className="w-3/4" />
        </div>
        <div className="flex flex-col gap-6 justify-center text-start items-center md:items-start w-100 md:w-1/2">
          <h1 className="text-4xl font-bold w-100 md:w-130">
            Personalize your business{" "}
            <span className="text-[#28D08A]">strategy</span> to reach out.
          </h1>
          <p className="w-85 md:w-130">
            Our advisors approach each client individually, so each time we
            select the appropriate insurance for your needs. Thanks to
            conversation, we will adjust the appropriate cover.
          </p>
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl font-semibold h-[60px]">91.1%</h1>
              <p>Customer Satisfaction</p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl font-semibold h-[60px]">4X</h1>
              <p>New Visitors</p>
            </div>
          </div>
        </div>
      </div>

      <FetchedData />

      <div className="flex flex-col justify-center items-center gap-7 px-10 md:px-20 py-15 bg-[#F0F8FF]">
        <div className="flex justify-center items-center w-85">
          <h1 className="text-3xl font-bold text-center">
            Here’s our latest updates from the{" "}
            <span className="text-[#28D08A]">news</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-7 justify-between  items-center ">
          <div className="flex flex-col rounded-t-3xl gap-3 bg-[#ffffff] ">
            <img src="/images/newsOne.png" alt="" />
            <div className="flex flex-col justify-center items-start gap-3 p-4">
              <p claa>May 30</p>
              <h3 className="font-semibold">
                The future is now: Explore Techty's AI-Powered tools
              </h3>
              <p>
                Let us manage your IT for you so that you can get back to doing
                what you do best.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-t-3xl gap-3 bg-[#ffffff]">
            <img src="/images/newsTwo.png" alt="" />

            <div className="flex flex-col justify-center items-start gap-3 p-4">
              <p>May 30</p>
              <h3 className="font-semibold">
                Cybersecurity threats in 2023: How AI can keep you protected
              </h3>
              <p>
                Let us manage your IT for you so that you can get back to doing
                what you do best.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-t-3xl gap-3 bg-[#ffffff]">
            <img src="/images/newsThree.png" alt="" />

            <div className="flex flex-col justify-center items-start gap-3 p-4">
              <p>May 30</p>
              <h3 className="font-semibold">
                5 reasons why Techty is the go-to choice for small business.
              </h3>
              <p>
                Let us manage your IT for you so that you can get back to doing
                what you do best.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Homepage