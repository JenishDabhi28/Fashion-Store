import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <div className="w-full sm:w-auto">
          <img
            src="https://media.istockphoto.com/id/1059156958/photo/pure-feelings.jpg?s=1024x1024&w=is&k=20&c=fDzMLNxXbBRBbrywwBXd3pxVWaZ-POTKLBODHIvL_sc="
            className="w-full h-auto"
            alt="Hero Image"
          />
        </div>

        <div className="w-full px-5 text-center mt-5">
          <h1 className="text-3xl sm:text-5xl">Get up to 30% off New Arrivals</h1>
          <button className="w-32 h-12 bg-black text-white rounded-full mt-4">
            <NavLink to="/AllProduct">Shop Now</NavLink>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
