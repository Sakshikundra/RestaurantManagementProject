import React from "react";

export default function PayoutCard({ user }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out mb-6">
      <div className="flex-shrink-0">
        <img
          src={user.image}
          alt={user.name}
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
      </div>

      <div className="flex-grow">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col flex-grow">
            <p className="font-semibold text-lg text-gray-700">Name: {user.name}</p>
            <p className="text-sm text-gray-600">ID: {user.id}</p>
            <p className="text-sm text-gray-600">Mobile: {user.mobile}</p>
            <p className="text-sm text-gray-600">Role: {user.role}</p>
          </div>

          <div className="flex flex-col flex-grow">
            <p className="font-semibold text-lg text-gray-700">Account Holder: {user.accountHolder}</p>
            <p className="text-sm text-gray-600">Account No.: {user.accountNumber}</p>
            <p className="text-sm text-gray-600">IFSC: {user.ifsc}</p>
            <p className="text-sm text-gray-600">Branch: {user.branch}</p>
          </div>

          <div className="flex flex-col justify-between">
            <p className="font-semibold text-lg text-gray-700">Amount: ₹{user.amount}</p>
            <p className="font-semibold text-sm text-gray-600">
              Status: 
              <span
                className={
                  user.status === "PAID" ? "text-lime-600" : "text-red-600"
                }
              >
                {user.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
