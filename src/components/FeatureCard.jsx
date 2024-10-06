import React from "react";
import { Discount } from "./Discount";

export const FeatureCard = ({ item }) => {
  return (
    <div className="p-4">
      <div className="rounded-md relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <img
          className="rounded-t-md w-full"
          src={`${
            item === 1
              ? require("../assets/imgs/hawaii.jpg")
              : item === 2
              ? require("../assets/imgs/egypt.jpg")
              : require("../assets/imgs/india.jpg")
          } `}
        />
        <div className="absolute top-0 left-0 p-2">
          <Discount />
        </div>
        <h1 className="text-2xl font-bold text-center mt-4 text-[#3D8D9A]">
          {item === 1 ? "Hawaii" : item === 2 ? "Egypt" : "India"}
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          expedita excepturi esse, facilis error fugit ad accusantium autem. Ut
        </p>
        <div className="flex gap-2 text-xl justify-center my-2">
          <i className="fa-solid fa-star text-yellow-300"></i>
          <i className="fa-solid fa-star text-yellow-300"></i>
          <i className="fa-solid fa-star text-yellow-300"></i>
          <i className="fa-solid fa-star text-yellow-300"></i>
          <i className="fa-solid fa-star text-yellow-300"></i>
        </div>
        <div className="text-center py-4 ">
          <button
            type="button"
            className="bg-[#6DB2B9] text-white rounded-md px-4 py-1 hover:bg-slate-300 hover:text-black hover:scale-105 duration-300"
          >
            Check Out !
          </button>
        </div>
      </div>
    </div>
  );
};
