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
    <div className="flex flex-col items-center justify-center px-10 my-15 bg-[#ffffff]">
      <div>
        <h1 className="text-3xl font-semibold items-center justify-center">
          Empower your business <br /> with cutting-edge
          <span className="text-[#28D08A]"> solutions. </span>
        </h1>
      </div>

      <div className="flex justify-center items-start gap-5 my-10">
        <button
          onClick={firstState}
          className="flex justify-center gap-5 cursor-pointer" 
        >
          <div className="text-[#28D08A] text-6xl font-semibold h-[73px]">
            01
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
            <p className="text-start text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </button>

        <button
          onClick={secondState}
          className="flex justify-center gap-5 cursor-pointer"
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
          className="flex justify-center gap-5 cursor-pointer"
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

      <hr className="border-t-2 border-[#28D08A] w-[90%]" />

      <div className="flex">
        {first && (
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
              <div className="flex flex-col text-[#4E4E4E] gap-2">
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
                  <p>
                    We collect ideas from different design inspirations,
                  </p>{" "}
                </div>
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
                  <p>Analysis data for any kind of corrections.</p>
                </div>
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
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
          <div className="flex justify-center gap-10 items-center my-10 w-full">
            <div className=" w-3/4">
              <img src="/images/state2.jpg" alt="" />
            </div>
            <div className="flex flex-col items-start gap-8 w-3/4">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#171A1F] font-semibold">Data Analysis</h3>
                <p className="text-[#4E4E4E] w-135">
                  With our Techty company, you can create landing pages that
                  convert more visitors than any other website. You can easily
                  create a page using a variety of unique blocks.
                </p>
              </div>
              <div className="flex flex-col text-[#4E4E4E] gap-2">
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
                  <p>
                    We collect ideas from different design inspirations,
                  </p>{" "}
                </div>
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
                  <p>Analysis data for any kind of corrections.</p>
                </div>
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
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
          <div className="flex justify-center gap-10 items-center my-10 w-full">
            <div className=" w-3/4">
              <img src="/images/state3.jpg" alt="" />
            </div>
            <div className="flex flex-col items-start gap-8 w-3/4">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#171A1F] font-semibold">Finalize Products</h3>
                <p className="text-[#4E4E4E] w-135">
                  With our Techty company, you can create landing pages that
                  convert more visitors than any other website. You can easily
                  create a page using a variety of unique blocks.
                </p>
              </div>
              <div className="flex flex-col text-[#4E4E4E] gap-2">
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
                  <p>
                    We collect ideas from different design inspirations,
                  </p>{" "}
                </div>
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
                  <p>Analysis data for any kind of corrections.</p>
                </div>
                <div className="flex gap-1">
                  <img src="/images/checkbox.png" alt="" />
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