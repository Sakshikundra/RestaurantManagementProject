import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
     
      <div className="flex justify-between bg-[#25476A] px-[4rem] py-[1rem]">
        <div>
          <h2 className="font-bold font-sans text-white">Restaurant Management</h2>
        </div>
        <div>
          <h3 className="text-gray-50">Admin</h3>
        </div>
      </div>

      
      <nav className="flex gap-5 text-[12px] font-bold list-none px-[4rem] py-[1rem] shadow-md bg-white">
        <NavLink to="/dashboard" className="text-[#9FCC2E]">Dashboard</NavLink>
        <NavLink to="/payout" className="text-[#25476A]">Payout</NavLink>
        <NavLink to="/attendance" className="text-[#25476A]">Attendance</NavLink>
        <NavLink to="/inventory" className="text-[#25476A]">Inventory</NavLink>
        <NavLink to="/report" className="text-[#25476A]">Reports</NavLink>
        <NavLink to="/member" className="text-[#25476A]">Members</NavLink>
      </nav>
    </header>
  );
}
