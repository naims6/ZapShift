import React from "react";

const Coverage = () => {
  return (
    <div className="mt-8 mx-4">
      <div className="container2 bg-surface py-20 px-25 rounded-xl">
        <div>
          <h1 className="text-5xl font-bold">
            We Are Available in 64 District
          </h1>
          <div className="mt-5">
            <input
              className="bg-[#CBD5E1]/30 rounded-l-xl py-4 px-5  focus:outline-1 focus:outline-primary"
              type="search"
              placeholder="Search Here"
            />
            <button className="bg-primary px-5 py-4 cursor-pointer font-medium rounded-r-xl ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
