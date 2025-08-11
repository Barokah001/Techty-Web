import React from 'react'
import Button from '../components/Button';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <section className="font-space">
      <div className="bg-[#F0F8FF] h-screen px-10 font-space">
        <div className="flex justify-center items-center ">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold pb-15">
              Secure <span className="text-[#28D08A]">business</span> <br />
              with Techty security.
            </h1>
            <p className="pb-8 w-[80%]">
              We have considered our solutions to support every stage of your
              growth. We are the fastest and easiest way to launch an attractive
              and feature-complete SaaS showcase.
            </p>

            <div className="flex gap-6">
              <Button />
              <button className="px-6 py-2 bg-[#28D08A] hover:bg-black text-[#ffffff] text-l font-normal   rounded-md">
                Hire an Expert
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center  rounded-md bg-white">
              <img
                src="/images/heroSc.png"
                alt=""
                className="rounded-md w-[860px]"
              />
            </div>
            <div className="flex justify-center gap-3 py-7">
              <h3 className="font-semibold text-l">Trustpilot</h3>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 w-[90%] my-5" />
        <div className="flex justify-between items-center">
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

      <div className="flex flex-col items-center justify-center px-10 my-15 bg-[#ffffff]">
        <div>
          <h1 className="text-3xl font-semibold items-center justify-center">
            Empower your business <br /> with cutting-edge
            <span className="text-[#28D08A]"> solutions. </span>
          </h1>
        </div>

        <div className="flex justify-center items-start gap-5 my-10">
          <div className="flex justify-center gap-5 cursor-pointer">
            <div className="text-[#28D08A] text-6xl font-semibold h-[73px]">
              01
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
              <p className="text-[#4E4E4E]">
                Creating or improving products to meet our user needs.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 cursor-pointer">
            <div className="text-6xl font-semibold h-[73px]">02</div>
            <div className="flex flex-col items-start">
              <h3 className="text-[#171A1F] font-semibold">Data Analysis</h3>
              <p className="text-[#4E4E4E]">
                Creating or improving products to meet our user needs.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 cursor-pointer">
            <div className="text-6xl font-semibold h-[73px]">03</div>
            <div className="flex flex-col items-start">
              <h3 className="text-[#171A1F] font-semibold">Analyze Product</h3>
              <p className="text-[#4E4E4E]">
                Creating or improving products to meet our user needs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 items-center my-10 w-full">
          <div className=" w-3/4">
            <img src="/images/aboutSc.png" alt="" />
          </div>
          <div className="flex flex-col items-start gap-8 w-3/4">
            <div className="flex flex-col gap-5">
              <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
              <p className="text-[#4E4E4E] w-135">
                With our Techty company, you can create landing pages that
                convert more visitors than any other website. You can easily
                create a page using a variety of unique blocks.
              </p>
            </div>
            <ul className="list-disc text-[#4E4E4E] px-5">
              <li>We collect ideas from different design inspirations,</li>
              <li>Analysis data for any kind of corrections.</li>
              <li>Finalize the product for the production to be done.</li>
            </ul>
            <Button />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-betweem w-full bg-[#F0F8FF] h-[320px] px-10  ">
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

      <div className="flex justify-center items-center gap-7 my-15 px-10">
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-bold pb-15">
            Our most priority is to provide the effective{" "}
            <span className="text-[#28D08A]">solutions.</span>
          </h1>
          <p className="pb-8 w-[80%]">
            With a library full of thousands of templates to choose from, go
            idea to launch in a matter of minutes. Try uploading your own for
            sale.
          </p>

          <div className="flex gap-6">
            <Button />
          </div>
        </div>
        <div className="w-3/4">
          <img src="/images/demoImg.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#171A1F] text-white pt-10 pr-10">
        <div>
          <img src="/images/Rectangle.png" alt="" className="w-3/4" />
        </div>
        <div className="flex flex-col gap-6 items-start w-1/2">
          <h1 className="text-4xl font-bold w-130">
            Personalize your business{" "}
            <span className="text-[#28D08A]">strategy</span> to reach out.
          </h1>
          <p className="w-130">
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

      <div className="flex flex-col gap-6 bg-[#FFFFFF]">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold items-center justify-center">
            Read what the <span className="text-[#28D08A]">customers </span> are
            saying about us.
          </h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col items-start justify-center h-[230px]">
            <p>
              “We struggled for years to find an IT company that we could trust.
              While others would try to sell us IT solutions. We actually took
              the time to listen to what made us unique as a business.”
            </p>
          </div>

          <div className="flex flex-col items-start justify-center h-[230px]">
            <p>
              “We struggled for years to find an IT company that we could trust.
              While others would try to sell us IT solutions. We actually took
              the time to listen to what made us unique as a business.”
            </p>
          </div>

          <div className="flex flex-col items-start justify-center h-[230px]">
            <p>
              “We struggled for years to find an IT company that we could trust.
              While others would try to sell us IT solutions. We actually took
              the time to listen to what made us unique as a business.”
            </p>
          </div>

          <div className="flex flex-col items-start justify-center h-[230px]">
            <p>
              “We struggled for years to find an IT company that we could trust.
              While others would try to sell us IT solutions. We actually took
              the time to listen to what made us unique as a business.”
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 px-10 my-15 bg-[#F0F8FF]">
        <div>
          <h1>
            Here’s our latest updates from the{" "}
            <span className="text-[#28D08A]">news</span>
          </h1>
        </div>
        <div className="flex gap-7 justify-between  items-center ">
          <div className="flex flex-col rounded-md gap-3">
            <img src="/images/newsOne.png" alt="" />
            <p>May 30</p>
            <h3 className="font-semibold">
              The future is now: Explore Techty's AI-Powered tools
            </h3>
            <p>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>
          <div className="flex flex-col rounded-md gap-3">
            <img src="/images/newsTwo.png" alt="" />
            <p>May 30</p>
            <h3 className="font-semibold">
              Cybersecurity threats in 2023: How AI can keep you protected
            </h3>
            <p>
              Let us manage your IT for you so that you can get back to doing
              what you do best.
            </p>
          </div>
          <div className="flex flex-col rounded-md gap-3">
            <img src="/images/newsThree.png" alt="" />
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

      <Footer />
    </section>
  );
}

export default Homepage