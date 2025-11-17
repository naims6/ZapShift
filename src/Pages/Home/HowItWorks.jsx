import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="mx-4 mt-22">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {/* first */}
          <div className="flex flex-col bg-surface p-7 rounded-md">
            <TbTruckDelivery size={60} />
            <h2 className="text-xl font-bold mt-6">Booking Pick a drop</h2>
            <p className="text-text-secondary font-medium mt-4">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col bg-surface p-7 rounded-md">
            <TbTruckDelivery size={60} />
            <h2 className="text-xl font-bold mt-6">Cash On Delivey</h2>
            <p className="text-text-secondary font-medium mt-4">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          {/* 3rd */}
          <div className="flex flex-col bg-surface p-7 rounded-md">
            <TbTruckDelivery size={60} />
            <h2 className="text-xl font-bold mt-6">Delivery Hub</h2>
            <p className="text-text-secondary font-medium mt-4">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          {/* 4th */}
          <div className="flex flex-col bg-surface p-7 rounded-md">
            <TbTruckDelivery size={60} />
            <h2 className="text-xl font-bold mt-6">Booking SME & Corporate</h2>
            <p className="text-text-secondary font-medium mt-4">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
