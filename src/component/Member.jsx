export default function Member() {
    const members = [
      { id: 1, name: "John Doe", role: "Manager", phone: "123-456-7890" },
      { id: 2, name: "Jane Smith", role: "Chef", phone: "987-654-3210" },
      { id: 3, name: "Ajay Sharma", role: "Waiter", phone: "555-123-4567" },
      { id: 4, name: "Ravi Kumar", role: "Delivery", phone: "555-765-4321" },
    ];
  
    return (
      <div className="bg-gradient-to-r from-[#25476A] via-[#6D98C1] to-[#A0C9E7] min-h-screen px-8 py-8">
        <h1 className="text-3xl font-semibold text-white text-center mb-8">Members</h1>
  
        <div className="bg-white w-full m-auto rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              className="w-full max-w-xs text-black text-center border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FCC2E] focus:border-transparent"
              placeholder="Search Name, ID"
            />
          </div>
  
          <table className="w-full text-left border-collapse table-auto">
            <thead>
              <tr className="bg-[#25476A] text-sm text-white">
                <th className="p-4 border">#ID</th>
                <th className="p-4 border">Full Name</th>
                <th className="p-4 border">Role</th>
                <th className="p-4 border">Phone</th>
                <th className="p-4 border">Action</th>
              </tr>
            </thead>
  
            <tbody>
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="text-sm text-gray-800 hover:bg-[#f1f1f1] transition-all duration-300"
                >
                  <td className="p-4 border">{member.id}</td>
                  <td className="p-4 border">{member.name}</td>
                  <td className="p-4 border">{member.role}</td>
                  <td className="p-4 border">{member.phone}</td>
                  <td className="p-4 border">
                    <button className="bg-[#25476A] text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:bg-[#9FCC2E] transition-all">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white font-semibold py-2 px-6 ml-2 rounded-xl shadow-md hover:bg-red-600 transition-all">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  