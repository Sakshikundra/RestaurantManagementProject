import MiniCalendar from "./calender";

export default function Attendance() {
  return (
    <div className="bg-slate-300 h-100% px-16">
      <h1 className="font-semibold py-8 text-2xl">Attendance</h1>

      <div className="bg-white w-full m-auto rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="flex items-center font-semibold text-lg">
            Date: <MiniCalendar />
          </h3>

          <input
            type="text"
            className="text-black text-center border rounded-xl px-4 py-1"
            placeholder="Search Name, ID"
          />
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-200 text-sm text-gray-700">
              <th className="p-3 border">#ID</th>
              <th className="p-3 border">Full Name</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(13)].map((_, index) => (
              <tr key={index} className="text-sm text-gray-600">
                <td className="p-3 border">--</td>
                <td className="p-3 border">--</td>
                <td className="p-3 border">--</td>
                <td className="p-3 border">
                    <div className="flex gap-4">
                    <button className="bg-red-600 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 shadow-md hover:shadow-2xl text-white font-semibold">Absent</button>
                    <button className="bg-green-400 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-black font-semibold">Present</button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
