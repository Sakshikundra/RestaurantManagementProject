import Order from "./Order";
import Table from "./Table";

export default function Dashboard() {
  return (
    <div className="bg-slate-300 min-h-screen px-16 py-6">
      <h1 className="font-semibold py-6 text-2xl">Dashboard</h1>

      <div className="bg-white w-full m-auto rounded-xl p-6 shadow-lg">
        <h3 className="font-semibold text-xl text-gray-700">Orders in Queue</h3>

        <div className="flex justify-evenly py-4 space-x-6">
          <Order name="Ajay" amount="₹10,000" table="1" />
          <Order name="Ravi" amount="₹1,499" table="2" />
          <Order name="Krishna" amount="₹180" table="3" />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}
