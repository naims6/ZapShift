import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const res = await axiosSecure("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = async (rider, status) => {
    try {
      const updateInfo = { status: status, email: rider.email };
      const res = await axiosSecure.patch(`/riders/${rider._id}`, updateInfo);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: `Rider ${status}`,
          text: `Riders is ${status}`,
          icon: "success",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleReject = (rider) => {
    updateRiderStatus(rider, "reject");
  };

  return (
    <div>
      <h1 className="text-4xl">Rider : {riders.length}</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>NID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((r, index) => (
              <tr key={r._id}>
                <th>{index + 1}</th>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.nid}</td>
                <td>{r.status}</td>
                <td>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleApproval(r)}
                      className="btn btn-primary text-black"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(r)}
                      className="btn btn-primary text-black"
                    >
                      Reject
                    </button>
                    <button className="btn btn-primary text-black">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRider;
