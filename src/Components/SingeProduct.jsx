import React, { useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Myprovider } from "./Context/ProductContext";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const {
    singlepage,
    singleproduct,
    handlecart,
    handleplus,
    counter,
    handleminus,
  } = Myprovider();
  const { image, price, description, title } = singleproduct;
  const cart = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    singlepage(`${url}/${id}`);
  }, []);

  return (
    <div className="w-full lg:w-1/3 p-4">
      <div className="card border border-gray-300 rounded-lg">
        <img src={image} className="w-full h-40 object-cover rounded-t-lg" alt={title} />
        <div className="flex flex-col gap-2 p-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-base">${price}</p>
          <div className="flex items-center gap-3">
            <CiCircleMinus className="text-lg" onClick={handleminus} />
            <p className="text-base">{counter}</p>
            <BsPlusCircle className="text-lg" onClick={handleplus} />
          </div>
          <button
            className="w-full h-10 bg-blue-500 text-white rounded-full mt-auto"
            onClick={handlecart}
          >
            <NavLink to="/Cart">
              Add to Cart
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
