import React from "react";
import { Myprovider } from "./Context/ProductContext";
import MenCategory from "./MenCategory";
import AvailableProductMen from "./AvailableProductMen";

const MenSection = () => {
  const { menproduct, isloading } = Myprovider();

  return (
    <>
      <AvailableProductMen />
      {isloading ? (
        <div className="flex justify-center z-0">
          <h1 className="text-3xl text-red-500">Loading Data...</h1>
        </div>
      ) : (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {menproduct.map((curr, id) => (
              <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <MenCategory
                  key={id}
                  id={curr.id}
                  price={curr.price}
                  image={curr.image}
                  title={curr.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MenSection;
