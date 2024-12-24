import React from "react";
import services1 from "../../assets/services-1.svg";

const Projects = () => {
  return (
    <div className="w-[87%] h-fit py-10 mx-auto">
      <h3 className="flex justify-left items-center gap-4">
        <img src={services1} alt="" />
        <span className="text-xl font-medium">RECENT PROJECTS</span>
      </h3>
      <p className="text-4xl font-medium mt-4 text-center md:text-left">
        Discover our latest projects
      </p>
      <div className="w-full flex flex-col md:flex-row items-center justify-between my-8">
        <img
          src="https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg"
          alt=""
          className="rounded-xl"
        />
        <div>
          <h3 className="text-5xl font-medium mb-4 mt-4 md:mt-0 text-center md:text-left">Paramjyoti School Roofing</h3>
          <p className="text-2xl font-medium mb-4 text-center md:text-left">Amalapuram, Andhra Pradesh, 30,000 sq.ft</p>
          <p className="text-lg text-center md:text-left">This Project took around 6 Weeks to complete from Start to Finish</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between my-8">
        <div>
          <h3 className="text-5xl font-medium mb-4 mt-4 md:mt-0 text-center md:text-left">Paramjyoti School Roofing</h3>
          <p className="text-2xl font-medium mb-4 text-center md:text-left">Amalapuram, Andhra Pradesh, 30,000 sq.ft</p>
          <p className="text-lg text-center md:text-left">This Project took around 6 Weeks to complete from Start to Finish</p>
        </div>
        <img
          src="https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg"
          alt=""
          className="rounded-xl"
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8">
        <img
          src="https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg"
          alt=""
          className="rounded-xl"
        />
        <div>
          <h3 className="text-5xl font-medium mb-4 mt-4 md:mt-0 text-center md:text-left">Paramjyoti School Roofing</h3>
          <p className="text-2xl font-medium mb-4 text-center md:text-left">Amalapuram, Andhra Pradesh, 30,000 sq.ft</p>
          <p className="text-lg text-center md:text-left">This Project took around 6 Weeks to complete from Start to Finish</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
