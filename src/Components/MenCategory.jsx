import React from "react";
import { Myprovider } from "./Context/ProductContext";
import { NavLink } from "react-router-dom";

const MenCategory = ({ price, image, title, id }) => {
  const { isAuthenticate } = Myprovider();

  return (
    <div className="w-48 h-auto p-2 shadow-lg flex flex-col justify-center items-center hover:scale-90 hover:ease-in-out duration-300">
      <img src={image} alt={title} className="w-full h-auto" />

      <div className="detail flex flex-col items-center gap-1">
        <h1 className="text-sm text-black font-semibold text-center">{title}</h1>
        <h1 className="text-sm text-black font-semibold text-center">Price: ${price}</h1>
        <button className="w-full max-w-xs h-8 bg-blue-500 text-white rounded-full">
          <NavLink to={`/SingleProduct/${id}`} className="w-full h-full flex justify-center items-center">
            Know More
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default MenCategory;
