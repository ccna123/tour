import React from "react";

export const ReviewCard = ({ item }) => {
  return (
    <div className="bg-white max-w-[80%] mx-auto mt-10 rounded-lg">
      <div className="w-[5rem] h-[5rem] border-8 border-white mx-auto -mt-10 rounded-full">
        <img
          className="rounded-full w-full h-full object-cover"
          src={require(`../assets/imgs/user${item}.jpg`)}
        />
      </div>
      <h1 className="text-[#3D8D9A] text-3xl text-center font-bold">
        Someone's Name
      </h1>
      <p className="text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        perspiciatis quae vero incidunt magnam iusto ducimus, eius, aliquam
      </p>
      <div className="text-center text-xl my-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <i key={item} className="fa-solid fa-star text-yellow-300"></i>
        ))}
      </div>
    </div>
  );
};
