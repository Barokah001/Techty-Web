import React, { useState } from 'react'
import Button from './Button'

const ServiceStates = () => {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    const firstState = () => {
        setFirst(!first)
        setSecond(false)
        setThird(false)
    }
    const secondState = () => {
        setFirst(false)
        setSecond(!second)
        setThird(false)
    }
    const thirdState = () => {
        setFirst(false)
        setSecond(false)
        setThird(!third)
    }
  return (
    <div className="flex flex-col items-center justify-center px-10 md:px-20 my-15 bg-[#ffffff] font-space">
      <div>
        <h1 className="text-3xl font-bold items-center justify-center text-center w-90">
          Empower your business <br /> with cutting-edge
          <span className="text-[#28D08A]"> solutions. </span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-5 my-10 border-b-1 border-gray-400">
        <button
          onClick={firstState}
          className={`flex justify-center gap-5 cursor-pointer pb-2
      ${
        first
          ? "border-b-3 border-[#28D08A] text-[#28D08A]"
          : "border-b border-transparent text-black"
      }`}
        >
          <div className="text-6xl font-semibold h-[73px]">
            01
          </div>
          <div className="flex flex-col items-start ">
            <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
            <p className="text-start text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </button>

        <button
          onClick={secondState}
          className={`flex justify-center gap-5 cursor-pointer pb-2 
      ${
        second
          ? "border-b-3 border-[#28D08A] text-[#28D08A]"
          : "border-b border-transparent text-black"
      }`}
        >
          <div className="text-6xl font-semibold h-[73px] hover:text-[#28D08A]">
            02
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-[#171A1F] font-semibold">Data Analysis</h3>
            <p className="text-start text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </button>

        <button
          onClick={thirdState}
          className={`flex justify-center gap-5 cursor-pointer pb-2 
      ${
        third
          ? "border-b-3 border-[#28D08A] text-[#28D08A]"
          : "border-b border-transparent text-black"
      }`}
        >
          <div className="text-6xl font-semibold h-[73px] hover:text-[#28D08A]">
            03
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-[#171A1F] font-semibold">Analyze Product</h3>
            <p className="text-start text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </button>
      </div>

      <div className="flex">
        {first && (
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 items-center my-10 w-full">
            <div className="flex w-3/4">
              <img src="/images/aboutSc.png" alt="" />
            </div>
            <div className="flex flex-col items-start gap-8 w-95 md:w-3/4 px-7 md:px-0">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
                <p className="text-[#4E4E4E] w-80 md:w-135 text-justify">
                  With our Techty company, you can create landing pages that
                  convert more visitors than any other website. You can easily
                  create a page using a variety of unique blocks.
                </p>
              </div>
              <div className="flex flex-col text-[#4E4E4E] gap-2 text-justify w-80 md:w-140">
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>We collect ideas from different design inspirations,</p>{" "}
                </div>
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>Analysis data for any kind of corrections.</p>
                </div>
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>Finalize the product for the production to be done.</p>
                </div>
              </div>
              <Button
                name="Require a free Demo"
                style={"bg-[#28D08A] hover:bg-[]"}
              />
            </div>
          </div>
        )}

        {second && (
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 items-center my-10 w-full">
            <div className="flex w-3/4">
              <img src="/images/state2.jpg" alt="" />
            </div>
            <div className="flex flex-col items-start gap-8 w-95 md:w-3/4 px-7 md:px-0">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#171A1F] font-semibold">Data Analysis</h3>
                <p className="text-[#4E4E4E] w-80 md:w-135 text-justify">
                  With our Techty company, you can create landing pages that
                  convert more visitors than any other website. You can easily
                  create a page using a variety of unique blocks.
                </p>
              </div>
              <div className="flex flex-col text-[#4E4E4E] gap-2 text-justify w-80 md:w-140">
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>We collect ideas from different design inspirations,</p>{" "}
                </div>
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>Analysis data for any kind of corrections.</p>
                </div>
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>Finalize the product for the production to be done.</p>
                </div>
              </div>
              <Button
                name="Require a free Demo"
                style={"bg-[#28D08A] hover:bg-[]"}
              />
            </div>
          </div>
        )}

        {third && (
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 items-center my-10 w-full">
            <div className="flex w-3/4">
              <img src="/images/state3.jpg" alt="" />
            </div>
            <div className="flex flex-col items-start gap-8 w-95 md:w-3/4 px-7 md:px-0">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#171A1F] font-semibold">
                  Finalize Products
                </h3>
                <p className="text-[#4E4E4E] w-80 md:w-135 text-justify">
                  With our Techty company, you can create landing pages that
                  convert more visitors than any other website. You can easily
                  create a page using a variety of unique blocks.
                </p>
              </div>
              <div className="flex flex-col text-[#4E4E4E] gap-2 text-justify w-80 md:w-140">
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>We collect ideas from different design inspirations,</p>{" "}
                </div>
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>Analysis data for any kind of corrections.</p>
                </div>
                <div className="flex gap-1">
                  <div>
                    <img src="/images/checkbox.png" alt="" />
                  </div>
                  <p>Finalize the product for the production to be done.</p>
                </div>
              </div>
              <Button
                name="Require a free Demo"
                style={"bg-[#28D08A] hover:bg-[]"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceStates