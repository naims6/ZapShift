import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel = {} } = useQuery({
    queryKey: ["parcel", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });
  console.log(parcel);
  const handlePayment = async () => {
    const paymentInfo = {
      parcelName: parcel.parcelName,
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
    };

    const res = await axiosSecure.post(
      "/checkout-checkout-season",
      paymentInfo
    );
    console.log(res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>
        Payment Please for "{parcel.parcelName}" Cost is {parcel.cost}
      </h1>
      <button onClick={handlePayment} className="btn btn-primary text-black ">
        Pay
      </button>
    </div>
  );
};

export default Payment;
