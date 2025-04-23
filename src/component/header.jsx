import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full font-['Poppins'] shadow-md">
      {/* Top Brand Bar */}
      <div className="flex justify-between items-center bg-gradient-to-r from-[#2C3E50] to-[#1B2A41] px-16 py-6 text-white">
        <h1 className="text-2xl font-bold tracking-wide">Restaurant Management</h1>
        <div className="bg-[#9FCC2E] text-[#1B2A41] px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
          Admin Panel
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex gap-6 px-16 py-4 bg-white backdrop-blur-md text-sm font-semibold text-[#1B2A41] shadow-inner border-t border-gray-100">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-[#9FCC2E] text-white rounded-full shadow-md transition-all duration-300"
              : "px-4 py-2 rounded-full hover:bg-[#f3f3f3] transition-all duration-200"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/payout"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-[#9FCC2E] text-white rounded-full shadow-md transition-all duration-300"
              : "px-4 py-2 rounded-full hover:bg-[#f3f3f3] transition-all duration-200"
          }
        >
          Payout
        </NavLink>
        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-[#9FCC2E] text-white rounded-full shadow-md transition-all duration-300"
              : "px-4 py-2 rounded-full hover:bg-[#f3f3f3] transition-all duration-200"
          }
        >
          Attendance
        </NavLink>
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-[#9FCC2E] text-white rounded-full shadow-md transition-all duration-300"
              : "px-4 py-2 rounded-full hover:bg-[#f3f3f3] transition-all duration-200"
          }
        >
          Inventory
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-[#9FCC2E] text-white rounded-full shadow-md transition-all duration-300"
              : "px-4 py-2 rounded-full hover:bg-[#f3f3f3] transition-all duration-200"
          }
        >
          Reports
        </NavLink>
        <NavLink
          to="/member"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-[#9FCC2E] text-white rounded-full shadow-md transition-all duration-300"
              : "px-4 py-2 rounded-full hover:bg-[#f3f3f3] transition-all duration-200"
          }
        >
          Members
        </NavLink>
      </nav>
    </header>
  );
}
