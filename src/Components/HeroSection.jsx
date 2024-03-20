import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
       <section className="flex w-screen h-screen items-center justify-center lg:gap-10 lg:flex-nowrap sm:flex-wrap">
          <div className="left-part w-60 lg:h-10 sm:w-screen flex items-center justify-center">
            <img src="https://media.istockphoto.com/id/1059156958/photo/pure-feelings.jpg?s=1024x1024&w=is&k=20&c=fDzMLNxXbBRBbrywwBXd3pxVWaZ-POTKLBODHIvL_sc=" className=" flex items-center justify-center"/>
      </div>

          <div className="right-part lg:w-3/5 sm:w-screen flex flex-col justify-center gap-5 items-center p-5">
               <h1 className="text-6xl text-wrap">Get up to 30% off <br/> New Arrivals</h1>
            <button className="w-24 h-10 bg-black text-white ms-2 rounded-full">
            <NavLink to="/AllProduct">

              Shop Now
            </NavLink>
            </button>
          </div>
       </section>
    </>
  );
};

export default HeroSection;
