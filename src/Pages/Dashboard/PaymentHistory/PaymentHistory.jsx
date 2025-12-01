import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.providerData[0].email],
    queryFn: async () => {
      const res = await axiosSecure(
        `/payments?email=${user?.providerData[0].email}`
      );
      return res.data;
    },
  });
  console.log({ payments, user });
  return (
    <div>
      <h1 className="text-4xl font-bold">Payment History: {payments.length}</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>No Name</td>
                <td>${p.amount}</td>
                <td>{p.trackingId}</td>
                <td>
                  <button className="btn btn-primary text-black">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
