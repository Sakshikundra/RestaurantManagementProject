import React from "react";
export default function PayoutCard({ user }) {
  return (
    
    <div className="flex flex-col  items-start items-center gap-4 h3-4 border-b border-2">
        <table>
        <tr className="border-b border-none ">
      <td className="p-4 border-2">
        <img
          src={user.image}
          className="w-16 h-16 rounded-md "
        />
      </td>
      <td className="p-4 border-2 text-sm">
        <p className="font-semibold">Name: {user.name}</p>
        <p className="font-semibold">ID: {user.id}</p>
        <p className="font-semibold">Mobile: {user.mobile}</p>
        <p className="font-semibold">Role: {user.role}</p>
      </td>
      <td className="p-4 border-2 text-sm">
        <p className="font-semibold">Account Holder: {user.accountHolder}</p>
        <p className="font-semibold">Account No.: {user.accountNumber}</p>
        <p className="font-semibold">IFSC: {user.ifsc}</p>
        <p className="font-semibold">Branch: {user.branch}</p>
      </td>
      <td className="p-4 border-2 text-sm">
        <p className="font-semibold">Amount: ₹{user.amount}</p>
        <p className="font-semibold">
          Status:
          <span
            className={
              user.status == "PAID" ? "text-lime-600" : "text-red-500"
            }
          >
            {user.status}
          </span>
        </p>
      </td>
    </tr>
        
        </table>
      
        
      </div>

  );
}
