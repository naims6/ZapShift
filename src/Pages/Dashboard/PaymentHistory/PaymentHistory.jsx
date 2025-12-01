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
    </div>
  );
};

export default PaymentHistory;
