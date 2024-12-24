import React from "react";


const Footer = () => {
  return (
    <footer className="w-full md:w-[87%] py-5 md:py-10 mx-auto ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center">Let&#39;s Get Started on Your Project  Contact Us Today!</h1>
        <button className="w-[50%] md:w-[20%] my-10 bg-black text-white px-6 py-2 text-sm rounded-md hover:bg-transparent hover:text-black border border-black hover:border-black transition-all duration-300">
          CONTACT
        </button>
        <div className="w-[50%] flex justify-evenly gap-[5%]">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="text-lg text-center">
        <p>&copy; 2024 by Pranavi PEB Construction.</p>
      </div>
    </footer>
  );
};

export default Footer;
