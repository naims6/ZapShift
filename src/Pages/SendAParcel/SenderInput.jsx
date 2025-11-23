import React from "react";

const SenderInput = ({
  finalServiceCenter,
  register,
  watch,
  user,
  districtByRegion,
}) => {
  const senderRegion = watch("senderRegion");
  console.log(user);

  return (
    <div className="col-span-6">
      <h3 className="text-base font-semibold mb-4">Sender Details</h3>

      <div className="space-y-3">
        {/* sender name */}
        <div>
          <label className="block   mb-1">Sender Name</label>
          <input
            className="w-full text-sm border border-border rounded px-3 py-2"
            placeholder="Sender Name"
            defaultValue={user?.displayName}
            {...register("senderName")}
          />
        </div>

        {/* sender region */}
        <div>
          <label className="block   mb-1">Region</label>
          <select
            className="w-full text-sm border border-border rounded px-3 py-2"
            {...register("senderRegion")}
          >
            <option disabled={true}>Pick a region</option>
            {finalServiceCenter.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* sender district */}
        <div>
          <label className="block mb-1">Your District</label>
          <select
            className="w-full border border-border rounded px-3 py-2"
            {...register("senderDistrict")}
          >
            <option disabled={true}>Select your District</option>
            {districtByRegion(senderRegion).map((d) => (
              <option key={d.district}>{d.district}</option>
            ))}
          </select>
        </div>

        {/* sender email */}
        <div>
          <label className="block   mb-1">Sender Email</label>
          <input
            className="w-full text-sm border border-border rounded px-3 py-2"
            placeholder="Sender Email"
            defaultValue={user?.email}
            {...register("senderEmail")}
          />
        </div>

        {/* sender instruction */}
        <div>
          <label className="block mb-1">Pickup Instruction</label>
          <textarea
            className="w-full text-sm border border-border rounded px-3 py-2 h-24"
            placeholder="Pickup Instruction"
            {...register("senderInstruction")}
          />
        </div>
      </div>
    </div>
  );
};

export default SenderInput;
