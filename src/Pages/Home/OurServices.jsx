import React from "react";
import service1 from "../../assets/services/service1.png";
// service card details
const serviceCardDetails = [
  {
    id: 1,
    image: service1,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery inside Dhaka within 4–6 hours from pickup to drop-off.",
  },
  {
    id: 2,
    image: service1,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels to all districts nationwide, offering home delivery with 48–72 hour delivery time.",
  },
  {
    id: 3,
    image: service1,
    title: "Fulfillment Solution",
    description:
      "We provide customized fulfillment services including inventory management, online order processing, packaging, and after-sales support.",
  },
  {
    id: 4,
    image: service1,
    title: "Cash on Delivery (COD)",
    description:
      "We offer 100% cash-on-delivery service anywhere in Bangladesh with full product safety assurance.",
  },
  {
    id: 5,
    image: service1,
    title: "Corporate Logistics Service",
    description:
      "We offer tailored corporate logistics solutions including warehouse facilities and inventory management.",
  },
  {
    id: 6,
    image: service1,
    title: "Parcel Return Service",
    description:
      "Our reverse logistics service allows customers to return or exchange products directly with merchants.",
  },
];

const OurServices = () => {
  return (
    <div className="mx-4 mt-25">
      <div className="container2 bg-text-primary py-24 px-20 rounded-2xl">
        {/* our service title */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl text-white font-bold">
            Our Services
          </h1>
          <p className="max-w-[650px] mx-auto text-border mt-4 mb-8">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        {/* services item */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCardDetails.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center  text-center bg-surface py-8 px-6 rounded-2xl hover:bg-primary transition-all duration-300"
            >
              <img src={card.image} alt={card.title} />
              <h2 className="text-2xl font-bold my-4">{card.title}</h2>
              <p className="text-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
