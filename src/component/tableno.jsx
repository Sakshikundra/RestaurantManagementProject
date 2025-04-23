export default function Tableno({ no, isAvailable }) {
  return (
    <button
      className={`${
        isAvailable ? "bg-lime-500 hover:bg-lime-600" : "bg-red-600 hover:bg-red-700"
      } rounded-xl w-32 h-20 flex flex-col items-center justify-center px-4 py-2 text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105`}
    >
      <div
        className={`${isAvailable ? "bg-green-400" : "bg-red-400"} w-2 h-2 rounded-full mb-2`}
      ></div>
      <h3 className="text-lg">Table {no}</h3>
    </button>
  );
}
