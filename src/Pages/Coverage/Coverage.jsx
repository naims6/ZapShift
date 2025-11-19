import React, { useRef } from "react";
import Map from "./Map";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const wareHouseData = useLoaderData();
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = wareHouseData.find((d) =>
      d.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(coord);
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="mt-8 mx-4">
      <div className="container2 bg-surface pt-20 pb-16 px-25 rounded-xl min-h-[800px]">
        <div>
          <h1 className="text-5xl font-bold">
            We Are Available in 64 District
          </h1>
          <form onSubmit={handleSearch} className="mt-5">
            <input
              className="bg-[#CBD5E1]/30 rounded-l-xl py-4 px-5  focus:outline-1 focus:outline-primary"
              name="location"
              type="search"
              placeholder="Search Here"
            />
            <button className="bg-primary px-5 py-4 cursor-pointer font-medium rounded-r-xl ">
              Search
            </button>
          </form>
        </div>
        <div className="h-[800px] mt-10">
          <Map mapRef={mapRef} wareHouseData={wareHouseData} />
        </div>
      </div>
    </div>
  );
};

export default Coverage;
