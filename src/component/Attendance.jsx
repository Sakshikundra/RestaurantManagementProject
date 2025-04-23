import MiniCalendar from "./calender";

export default function Attendance() {
  const attendees = [
    { id: "101", name: "Aarav Patel", role: "Chef", status: "Present" },
    { id: "102", name: "Isha Sharma", role: "Waiter", status: "Absent" },
    { id: "103", name: "Rohan Gupta", role: "Manager", status: "Present" },
    { id: "104", name: "Ananya Singh", role: "Server", status: "Absent" },
    { id: "105", name: "Vivaan Kapoor", role: "Bartender", status: "Present" },
    { id: "106", name: "Maya Reddy", role: "Host", status: "Absent" },
    { id: "107", name: "Arjun Mehta", role: "Chef", status: "Present" },
    { id: "108", name: "Priya Joshi", role: "Waiter", status: "Absent" },
    { id: "109", name: "Kabir Yadav", role: "Manager", status: "Present" },
    { id: "110", name: "Sanya Verma", role: "Server", status: "Present" },
    { id: "111", name: "Reyansh Sinha", role: "Bartender", status: "Absent" },
    { id: "112", name: "Tara Nair", role: "Host", status: "Present" },
    { id: "113", name: "Devansh Choudhary", role: "Chef", status: "Absent" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#F0F4F8] to-[#D9E4F5] min-h-screen px-16 py-8">
      <h1 className="font-semibold text-4xl text-[#2C3E50] mb-6 transition-all duration-300 hover:text-[#9FCC2E]">
        Attendance Tracker
      </h1>

      <div className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="flex items-center font-semibold text-lg text-[#34495E]">
            Date: <MiniCalendar />
          </h3>

          <input
            type="text"
            className="text-black text-center border-2 border-gray-300 rounded-2xl px-6 py-2 focus:outline-none focus:border-[#9FCC2E] transition-all duration-300 placeholder:text-gray-500"
            placeholder="Search by Name, ID"
          />
        </div>

        <table className="w-full table-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
          <thead>
            <tr className="bg-[#2C3E50] text-white text-sm">
              <th className="p-4 border-b text-center">#ID</th>
              <th className="p-4 border-b text-center">Full Name</th>
              <th className="p-4 border-b text-center">Role</th>
              <th className="p-4 border-b text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {attendees.map((attendee) => (
              <tr
                key={attendee.id}
                className="text-sm text-[#34495E] hover:bg-[#ECF0F1] transition-all duration-200"
              >
                <td className="p-4 border-b text-center">{attendee.id}</td>
                <td className="p-4 border-b text-center">{attendee.name}</td>
                <td className="p-4 border-b text-center">{attendee.role}</td>
                <td className="p-4 border-b text-center">
                  <div className="flex gap-4 justify-center">
                    <button
                      className={`${
                        attendee.status === "Absent"
                          ? "bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-200"
                          : "bg-gray-300 text-gray-600 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                      }`}
                    >
                      Absent
                    </button>
                    <button
                      className={`${
                        attendee.status === "Present"
                          ? "bg-gradient-to-r from-[#9FCC2E] to-[#27AE60] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-200"
                          : "bg-gray-300 text-gray-600 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                      }`}
                    >
                      Present
                    </button>
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
