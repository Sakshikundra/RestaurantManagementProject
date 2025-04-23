import { DiVim } from "react-icons/di";

export default function Inventory() {
  const inventoryItems = [
    { id: 1, name: "Item 1", quantity: 10, price: "₹100" },
    { id: 2, name: "Item 2", quantity: 20, price: "₹200" },
    { id: 3, name: "Item 3", quantity: 5, price: "₹150" },
    { id: 4, name: "Item 4", quantity: 30, price: "₹80" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-indigo-200 to-indigo-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Inventory
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventoryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <div className="text-gray-500 text-lg">{item.price}</div>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <button className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition-all">
                  <DiVim className="inline-block mr-2 text-lg" />
                  Update
                </button>
                <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 transition-all">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
