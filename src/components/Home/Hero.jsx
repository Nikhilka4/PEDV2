import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-[87%] h-[calc(100%-15vh)] md:h-[85vh] py-5 md:py-10 mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-[45%] flex flex-col justify-center items-center md:items-start mb-4 md:mb-0">
        <p className="leading-none text-3xl md:text-5xl font-bold text-center md:text-left mb-4 md:mb-8">Strong and Affordable <br />Pre-Engineered Buildings</p>
        <p className="text-xl text-center md:text-left">From design to completion, our PEB solutions are flexible and dependable, making sure your project is built better, quicker, and stays valuable.</p>
        <div className="flex items-center gap-4">
          <button className="border-black border-2 px-6 py-2 mt-4 rounded-2xl hover:bg-black hover:text-white">
              Explore
          </button>
          <Link to="/contact" className="flex items-center gap-2 mt-4 hover:underline">
              Contact us
              <IoIosArrowForward />
          </Link>
        </div>

      </div>
      <div className="w-full md:w-[55%] flex justify-end">
        <img
          src="https://static.wixstatic.com/media/63ef2e_2c43a5d6bf384a25b710695ba0ae5cbe~mv2.jpg/v1/fill/w_849,h_771,fp_0.44_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hero.jpg"
          alt="Hero Image" className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
