import React from "react";

const ReceiverInput = ({
  finalServiceCenter,
  register,
  watch,
  districtByRegion,
}) => {
  const receiverRegion = watch("receiverRegion");

  return (
    <div className="col-span-6">
      <h3 className="text-base font-semibold mb-4">Receiver Details</h3>

      <div className="space-y-3">
        {/* receiver name */}
        <div>
          <label className="block   mb-1">Receiver Name</label>
          <input
            className="w-full text-sm border border-border rounded px-3 py-2"
            placeholder="receiver Name"
            {...register("receiverName")}
          />
        </div>

        {/* receiver region */}
        <div>
          <label className="block mb-1">Region</label>
          <select
            className="w-full text-sm border border-border rounded px-3 py-2"
            {...register("receiverRegion")}
          >
            <option disabled={true}>Pick a region</option>
            {finalServiceCenter.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* receiver district */}
        <div>
          <label className="block mb-1">Your District</label>
          <select
            className="w-full border border-border rounded px-3 py-2"
            {...register("receiverDistrict")}
          >
            <option disabled={true} defaultValue={true}>
              Select your District
            </option>
            {districtByRegion(receiverRegion).map((d) => (
              <option key={d.district}>{d.district}</option>
            ))}
          </select>
        </div>

        {/* receiver email */}
        <div>
          <label className="block   mb-1">receiver Email</label>
          <input
            className="w-full text-sm border border-border rounded px-3 py-2"
            placeholder="receiver Email"
            {...register("receiverEmail")}
          />
        </div>

        {/* receiver instruction */}
        <div>
          <label className="block mb-1">Pickup Instruction</label>
          <textarea
            className="w-full text-sm border border-border rounded px-3 py-2 h-24"
            placeholder="Pickup Instruction"
            {...register("receiverInstruction")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReceiverInput;
