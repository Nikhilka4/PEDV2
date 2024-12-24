import React, { useState } from "react";
import services1 from "../assets/services-1.svg";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const ContactPage = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="w-[87%] h-[calc(100%-15vh)] md:h-[85vh] py-5 md:py-10 mx-auto flex flex-col md:flex-row ">
      <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-left">
        <h3 className="flex justify-left items-center gap-4">
          <img src={services1} alt="" />
          <span className="text-xl font-medium">CONTACT US</span>
        </h3>
        <p className="text-4xl font-medium mt-8 text-center md:text-left">
          Our friendly team would love to hear from you.
        </p>

        <div className="flex flex-col items-start justify-center gap-4 mt-10">
          <span className="flex items-center gap-4 text-3xl">
            <FaRegEnvelope />
            <p>hello@relume.io</p>
          </span>
          <span className="flex items-center gap-4 text-3xl">
            <FiPhone />
            <p>+1 (555) 000-0000</p>
          </span>
          <span className="flex items-center gap-4 text-3xl">
            <SlLocationPin />
            <p>123 Sample St, Sydney NSW 2000 AU</p>
          </span>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center mt-10 md:mt-0">
        <form className="w-full flex flex-col gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phonenumber" className="text-lg font-medium text-gray-700">Phone Number</label>
            <input type="text" id="phonenumber" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label
              htmlFor="services"
              className="text-lg font-medium text-gray-700"
            >
              Select a Service
            </label>
            <select
              id="services"
              value={selectedService}
              onChange={handleSelectChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Choose a service
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
            </select>
            {selectedService && (
              <p className="mt-2 text-sm text-gray-600">
                You selected:{" "}
                <span className="font-semibold">{selectedService}</span>
              </p>
            )}
          </div>
        </form>
        <button className="bg-black text-white px-6 py-2 text-sm rounded-md hover:bg-transparent hover:text-black border border-black hover:border-black transition-all duration-300 mt-10">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
