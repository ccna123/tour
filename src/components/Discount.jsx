import React from "react";

export const Discount = () => {
  return (
    <div className="bg-[#D03802] px-2 py-1 w-fit rounded-md text-xl text-white">
      {Math.floor(Math.random() * (30 - 10 + 1)) + 10}%
    </div>
  );
};
