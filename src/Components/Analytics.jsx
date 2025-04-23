import React from "react";
import laptop from "../assets/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-full max-w-full md:max-w-[500px] mx-auto my-4 rounded-2xl shadow-lg border border-gray-300 bg-white"
          src={laptop}
          alt="/"
        />
        <div className="flex flex-col justify-center md:ml-4">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            iusto voluptates, recusandae tempora laboriosam quaerat. Adipisci,
            sed cumque impedit, soluta vero culpa accusantium error sint aut eos
            corrupti blanditiis excepturi?
          </p>
          <button className="bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
