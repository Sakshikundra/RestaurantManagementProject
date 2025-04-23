export default function Order({ name, amount, table }) {
  return (
    <div className="py-4 rounded-xl bg-white border shadow-md w-60 flex flex-col items-center justify-center">
      <h4 className="font-bold text-xl">Table: {table}</h4>
      <p className="text-sm text-gray-700">Waiter: {name}</p>
      <p className="text-lg font-semibold">Amount: {amount}</p>
      <button className="bg-lime-500 hover:bg-lime-600 text-white rounded-md px-6 py-2 mt-4 transition-all duration-300">View Details</button>
    </div>
  );
}
