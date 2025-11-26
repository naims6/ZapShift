import React from "react";
import { useForm } from "react-hook-form";
import SenderInput from "./SenderInput";
import ReceiverInput from "./ReceiverInput";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

export default function SendAParcel() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const serviceCenter = useLoaderData();
  const duplicateCenter = serviceCenter.map((c) => c.region);
  const finalServiceCenter = [...new Set(duplicateCenter)];

  const districtByRegion = (region) => {
    const regions = serviceCenter.filter((d) => d.region === region);
    return regions;
  };

  const onSubmit = (data) => {
    const {
      // parcelName,
      parcelWeight,
      productType,
      receiverDistrict,
      // receiverEmail,
      // receiverInstruction,
      // receiverName,
      // receiverRegion,
      senderDistrict,
      // senderEmail,
      // senderInstruction,
      // senderName,
      // senderRegion,
    } = data;

    const isDocument = productType === "document";
    const isSameDistrict = receiverDistrict === senderDistrict;
    let cost;
    // if document
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    }
    // if non - document
    if (!isDocument) {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;

        const extraWeight = parcelWeight - 3;
        cost = isSameDistrict
          ? minCharge + 40
          : minCharge + 40 + extraWeight * 40;
      }
    }

    data.cost = cost;

    Swal.fire({
      title: "Confirm your payment?",
      text: `You will be charge
        ${cost} BDT`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Agree it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Ok Great!",
              text: "Your payment is done.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="container2 bg-surface p-8 mt-12 rounded-2xl">
      {/* Card / Panel */}
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold">Send A Parcel</h1>
            <p className="mt-3 font-bold text-text-secondary">
              Enter your parcel details
            </p>
          </div>
        </div>

        <hr className="my-6 border-t border-border" />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Radio + Parcel fields */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                defaultChecked
                value="document"
                // className="accent-green-400 w-4 h-4"
                {...register("productType")}
              />
              <span>Document</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="non-document"
                // className="accent-slate-400 w-4 h-4"
                {...register("productType")}
              />
              <span>Non-Document</span>
            </label>
          </div>

          {/* parcel name and weight */}
          <div className="mt-6 grid grid-cols-12 gap-4">
            <div className="col-span-12 grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-base font-bold mb-2">
                  Parcel Name
                </label>
                <input
                  className="w-full text-sm border border-border rounded px-3 py-2"
                  placeholder="Parcel Name"
                  {...register("parcelName")}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-base font-bold mb-2">
                  Parcel Weight (KG)
                </label>
                <input
                  className="w-full text-sm border border-border rounded px-3 py-2"
                  placeholder="Parcel Weight (KG)"
                  {...register("parcelWeight")}
                />
              </div>
            </div>
          </div>
          {/* sender and receiver details */}
          <div className="mt-8 grid grid-cols-12 gap-6">
            {/* Sender Details */}
            <SenderInput
              register={register}
              watch={watch}
              user={user}
              serviceCenter={serviceCenter}
              districtByRegion={districtByRegion}
              finalServiceCenter={finalServiceCenter}
            />
            {/* Receiver Details */}
            <ReceiverInput
              register={register}
              watch={watch}
              serviceCenter={serviceCenter}
              districtByRegion={districtByRegion}
              finalServiceCenter={finalServiceCenter}
            />
          </div>

          <div className="mt-6">*PickUp Time 4pm-7pm Approx</div>

          <div className="mt-6">
            <button className="bg-lime-400 text-sm font-semibold px-5 py-2 rounded shadow-sm">
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
