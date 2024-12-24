import React from "react";
import feature1 from "../../assets/feature-1.svg";
import feature2 from "../../assets/feature-2.svg";
import feature3 from "../../assets/feature-3.svg";

const Features = () => {
  return (
    <div className="bg-[#618741]">
      <div className="w-[87%] h-fit md:h-[85vh] py-10 mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[50%] h-[50%] md:h-full border-2 flex justify-center items-center">
          <h2 className="text-7xl font-bold text-white text-center my-10">
            More than just <br /> <span>Steel Structure</span>
          </h2>
        </div>
        <div className="w-full md:w-[50%] h-fit md:h-full mx-auto flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="basis-1/2 border-2 bg-white rounded-lg px-9 py-10 flex flex-col items-center justify-center">
              <img src={feature1} alt="" className="h-[50px]" />
              <h3 className="text-2xl my-3 font-medium">
                Maximized Efficiency
              </h3>
              <p className="text-center">
                Utilize resources, and leverage technology to the maximum. They
                are easy to set up, expand & modify.
              </p>
            </div>
            <div className="basis-1/2 border-2 bg-white rounded-lg px-9 py-10 flex flex-col items-center justify-center">
              <img src={feature2} alt="" className="h-[50px]" />
              <h3 className="text-2xl my-3 font-medium">Quality Control</h3>
              <p className="text-center">
                Products are inspected at all stages of fabrication for welding
                quality, dimensional tolerance, surface.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] border-2 bg-white rounded-lg px-9 py-10 flex flex-col items-center justify-center">
            <img src={feature3} alt="" className="h-[50px] " />
            <h3 className="text-2xl my-3 font-medium">On time Delivery</h3>
            <p className="text-center">
              With Quick design capabilities and advanced techniques we deliver
              our services on time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
