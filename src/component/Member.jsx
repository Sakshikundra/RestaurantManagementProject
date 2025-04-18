export default function Member(){
    return(    <div className="bg-slate-300 h-100% px-16">
          <h1 className="font-semibold py-8 text-2xl">Member</h1>
    
          <div className="bg-white w-full m-auto rounded-xl p-6 shadow">
            <div className="flex justify-between items-center mb-6">
              <></>
    
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
                  <th className="p-3 border">Phone</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
    
              <tbody>
                {[...Array(13)].map((_, index) => (
                  <tr key={index} className="text-sm text-gray-600">
                    <td className="p-3 border">--</td>
                    <td className="p-3 border">--</td>
                    <td className="p-3 border">--</td>
                    <td className="p-3 border">--</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

}