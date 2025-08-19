import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-7 justify-center items-center px-5 md:px-10 font-space py-10 bg-[#F1F1F1] min-h-screen">
        <h1 className="flex items-center justify-center font-bold text-center text-3xl">
          Contact Us
        </h1>
        <p className="flex items-center justify-center text-[#6F7681] text-center w-100">
          We're constantly pushing the boundaries of what's possible and seeking
          new ways to improve our services.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between items-start w-full my-15">
          <div className="flex flex-col justify-start ">
            <h2 className="font-semibold text-xl w-90">
              We’re happy to discuss your project and answer any question
            </h2>

            <div className="flex flex-col gap-7 py-5">
              <div className="flex py-2 gap-15">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <img src="/images/icon1.png" alt="" />
                    <h3 className="font-semibold text-normal">Toll Number</h3>
                  </div>
                  <p className="text-[#6F7681]">+234 801 272 3390</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <img src="/images/icon2.png" alt="" />
                    <h3 className="font-semibold text-normal">Mail Address</h3>
                  </div>
                  <p className="text-[#6F7681]">Info@example.com</p>
                </div>
              </div>

              <div className="flex py-2 gap-15">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <img src="/images/icon3.png" alt="" />
                    <h3 className="font-semibold text-normal">Working Hours</h3>
                  </div>
                  <p className="text-[#6F7681]">
                    Mon - Friday, <br /> 9a.m - 8 p.m
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <img src="/images/icon4.png" alt="" />
                    <h3 className="font-semibold text-normal">
                      Office Address
                    </h3>
                  </div>
                  <p className="text-[#6F7681]">Ikoyi, Lagos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 md:p-7 gap-4 bg-[#FFFFFF] rounded-sm">
            <h2 className="font-semibold text-xl ">Send Us Message</h2>
            <p className="text-[#6F7681] w-90">
              Feel free to fill up the form and our team will get back to you
              within 24 hours.
            </p>

            <div className="flex w-full">
              <form action="" className="flex flex-col gap-3 min-w-xl h-auto ">
                <div className="flex justify-center items-center gap-5 w-85  md:w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 bg-gray-100 w-1/2 rounded-md focus:outline-none focus:ring-0"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-2 bg-gray-100 w-1/2 rounded-md focus:outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Message"
                    className="p-2 bg-gray-100 w-85 md:w-full pb-50 rounded-md focus:outline-none focus:ring-0"
                  />
                </div>

                <button className="w-85 md:w-full bg-[#28D08A] p-2 text-white cursor-pointer rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
