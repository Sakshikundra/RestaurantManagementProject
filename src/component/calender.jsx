import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

export default function MiniCalendar() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handleDateClick = (day) => {
    const date = new Date(year, month, day);
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    setCurrentDate(new Date(year, newMonth, 1));
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    setCurrentDate(new Date(newYear, month, 1));
  };

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <span className="text-lg font-medium">
          {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
        </span>
        <AiOutlineCalendar className="text-2xl" />
      </button>

      {showCalendar && (
        <div className="absolute mt-3 bg-white p-4 rounded-3xl shadow-xl z-20 w-[20rem] border border-gray-200">
          {/* Month & Year Selectors */}
          <div className="flex justify-between mb-4 items-center">
            <select
              value={month}
              onChange={handleMonthChange}
              className="text-sm bg-gray-50 text-gray-800 border-2 rounded-lg px-3 py-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={handleYearChange}
              className="text-sm bg-gray-50 text-gray-800 border-2 rounded-lg px-3 py-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-xs font-medium text-gray-600 mb-2">
            {weekdays.map((day) => (
              <div key={day} className="text-center text-gray-500 font-semibold">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                onClick={() => day && handleDateClick(day)}
                className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200 
                  ${day ? "text-gray-800 hover:bg-indigo-100" : "text-transparent"} 
                  ${selectedDate?.getDate() === day &&
                  selectedDate?.getMonth() === month &&
                  selectedDate?.getFullYear() === year
                    ? "bg-indigo-600 text-white font-semibold" 
                    : ""}`}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
