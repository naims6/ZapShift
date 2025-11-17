import React from "react";
import liveTracking from "../../assets/ourProcess/live-tracking.png";
import safeDelivery from "../../assets/ourProcess/safe-delivery.png";

const OurProcess = () => {
  return (
    <div className="mx-4 mt-20 border-y-4 border-dotted border-border">
      <div className="flex flex-col gap-10 my-16 max-w-7xl w-full mx-auto">
        {/* 1st */}
        <div className="bg-surface gap-10 rounded-2xl p-8 flex flex-col md:flex-row items-center">
          <figure className="border-dotted border-r-4 border-border pr-12">
            <img src={liveTracking} alt="live tracking" />
          </figure>
          <div>
            <h1 className="text-2xl font-bold">Live Parcel Tracking</h1>
            <p className="text-text-secondary mt-4 font-medium">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="bg-surface gap-10 rounded-2xl p-8 flex flex-col md:flex-row items-center">
          <figure className="border-dotted border-r-4 border-border pr-12">
            <img src={safeDelivery} alt="live tracking" />
          </figure>
          <div>
            <h1 className="text-2xl font-bold">Live Parcel Tracking</h1>
            <p className="text-text-secondary mt-4 font-medium">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="bg-surface gap-10 rounded-2xl p-8 flex flex-col md:flex-row items-center">
          <figure className="border-dotted border-r-4 border-border pr-12">
            <img src={liveTracking} alt="live tracking" />
          </figure>
          <div>
            <h1 className="text-2xl font-bold">Live Parcel Tracking</h1>
            <p className="text-text-secondary mt-4 font-medium">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
