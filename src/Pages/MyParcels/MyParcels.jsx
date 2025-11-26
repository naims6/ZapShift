import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`parcels/${id}`).then((data) => {
          if (data.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  console.log(parcels);
  return (
    <div>
      <h1>All of my parcels {parcels.length}</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Reciever Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>{p.receiverName}</td>
                <td>{p.cost}</td>
                <td>
                  {p.paymentStatus ? (
                    <span className="text-green-400 font-bold">Paid</span>
                  ) : (
                    <Link className="btn btn-primary text-black">Pay</Link>
                  )}
                </td>

                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleParcelDelete(p._id)}
                      className="btn btn-square cursor-pointer"
                    >
                      X
                    </button>
                    <button className="btn btn-square cursor-pointer">E</button>
                    <button className="btn btn-square cursor-pointer">R</button>
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

export default MyParcels;
