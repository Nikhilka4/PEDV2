import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import services2 from "../../assets/services-2.svg";

const About = () => {
  return (

    <div className="bg-[#618741]">
        <div className="w-[87%] h-fit md:h-[85vh] py-10 mx-auto flex flex-col-reverse md:flex-row z-10 text-white">
          <div className="h-full w-full md:w-[50%] flex flex-col justify-center items-left">
              <h3 className="flex justify-left items-center gap-4">
                <img src={services2} alt="" className='text-white'/>
                <span className="text-xl font-medium">ABOUT</span>
              </h3>
              <p className="text-4xl font-medium mt-4 text-center md:text-left">
              About Pranavi PEB Construction
              </p>
              <p className='text-2xl mt-4 w-full md:w-[90%] text-justify'>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer. <br /> This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
              <button className="flex justify-left items-center gap-4 mt-8">
                <IoIosArrowRoundForward className="h-12 w-12 font-extralight bg-black text-white p-1" />{" "}
                LEARN MORE
              </button>
          </div>
          <div className="h-[50vh] md:h-full w-full md:w-[50%] flex justify-center items-center">
          <img src="https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg" alt="" className="h-[90%] w-full rounded-xl object-cover"/>
          </div>
        </div>
    </div>
  )
}

export default About
