import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

export default function Rider() {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const region = watch("region");
  const serviceCenter = useLoaderData();
  const duplicateCenter = serviceCenter.map((c) => c.region);
  const finalServiceCenter = [...new Set(duplicateCenter)];

  const districtByRegion = (region) => {
    const regions = serviceCenter.filter((d) => d.region === region);
    return regions;
  };

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/riders", data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Submitted",
          text: "Your application is submitted",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("POST /riders failed:", error);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Be a Rider</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* rider name */}
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg p-2 focus:outline-none"
                {...register("name", { required: true })}
              />
            </div>
            {/* rider email */}
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg p-2 focus:outline-none"
                {...register("email", { required: true })}
              />
            </div>
            {/* rider region */}
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Your Region
              </label>
              <select
                {...register("region", { required: true })}
                className="border rounded-lg p-2 focus:outline-none text-gray-600"
              >
                <option>Select your Region</option>
                {finalServiceCenter.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            {/* rider district */}
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Your District
              </label>
              <select
                {...register("district", { required: true })}
                className="border rounded-lg p-2 focus:outline-none text-gray-600"
              >
                <option>Select your District</option>
                {districtByRegion(region).map((r) => (
                  <option key={r.district}>{r.district}</option>
                ))}
              </select>
            </div>
            {/* rider nid */}
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1">
                NID No
              </label>
              <input
                type="number"
                placeholder="NID"
                className="border rounded-lg p-2 focus:outline-none"
                {...register("nid", { required: true })}
              />
            </div>
            {/* rider contact  */}
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Contact
              </label>
              <input
                type="text"
                placeholder="Contact"
                className="border rounded-lg p-2 focus:outline-none"
                {...register("contact", { required: true })}
              />
            </div>
            {/* rider ware house  */}
            <div className="flex flex-col col-span-2">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Which warehouse you want to work?
              </label>
              <select
                {...register("warehouse", { required: true })}
                className="border rounded-lg p-2 focus:outline-none text-gray-600"
              >
                <option>Select warehouse</option>
                <option>Tangail</option>
              </select>
            </div>

            <button
              type="submit"
              className="col-span-2 bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section (Illustration) */}
        <div className="flex justify-center">
          <img
            src="/rider-illustration.png"
            alt="Rider Illustration"
            className="w-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
