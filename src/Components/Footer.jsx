import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-screen flex flex-wrap p-3 z-20" style={{ background: "rgba(53, 59, 72,1.0)" }}>
      <div className="lg:w-2/5 p-3 sm:w-screen my-3">
        <h1 className="text-3xl ms-2 text-white text-center">Follow Us</h1>
        <div className="social-media flex my-5 gap-2 justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center">
            <FaFacebookF className="text-2xl text-white" />
          </div>
          <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center">
            <FaTwitter className="text-2xl text-white" />
          </div>
          <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center">
            <IoLogoInstagram className="text-2xl text-white" />
          </div>
          <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center">
            <FaYoutube className="text-2xl text-white" />
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 p-2 flex justify-center flex-col gap-2 sm:w-screen">
        <div className="lg:w-4/5 p-5 flex gap-5 justify-center sm:w-screen">
          <h1 className="font-arial text-white text-xl">NEW ARRIVALS</h1>
          <h1 className="font-arial text-white text-xl">DISCOUNTS</h1>
          <h1 className="font-arial text-white text-xl">CONTACT US</h1>
        </div>

       

        <div className="my-4 flex gap-2 items-center justify-center">
          <input type="email" className="h-12 w-2/5 rounded-full ps-2 text-2xl text-center" placeholder="Email" />
          <button className="w-40 rounded-full h-12 bg-red-500 text-white">Subscribe</button>
        </div>
        <h4 className="text-white text-xl font-serif text-center lg:w-3/5">
          StyleStore Powered By <span className="text-red-400 ms-1 font-bold">Fashion Clothes</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
