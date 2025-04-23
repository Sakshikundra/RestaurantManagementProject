import Tableno from "./Tableno.jsx";

export default function Table() {
  const OArray = [
    { tableno: "1", isAvailable: true },
    { tableno: "2", isAvailable: false },
    { tableno: "3", isAvailable: true },
    { tableno: "4", isAvailable: true },
    { tableno: "5", isAvailable: false },
    { tableno: "6", isAvailable: true },
    { tableno: "7", isAvailable: true },
    { tableno: "8", isAvailable: false },
    { tableno: "9", isAvailable: true },
    { tableno: "10", isAvailable: true },
    { tableno: "11", isAvailable: false },
    { tableno: "12", isAvailable: false },
  ];

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Table Booking Status</h2>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="bg-lime-500 h-3 w-3 rounded-full mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="bg-red-600 h-3 w-3 rounded-full mr-2"></div>
          <span>Not Available</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-4">
        {OArray.map((item, index) => (
          <Tableno key={index} no={item.tableno} isAvailable={item.isAvailable} />
        ))}
      </div>
    </div>
  );
}
