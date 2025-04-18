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
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:shadow-md transition-all border"
      >
        <span className="text-gray-800 text-sm font-medium">
          {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
        </span>
        <AiOutlineCalendar className="text-xl text-blue-600" />
      </button>

      {showCalendar && (
        <div className="absolute mt-2 bg-white p-4 rounded-xl shadow-lg z-20 w-[17rem] border border-gray-200">
          {/* Month & Year Selectors */}
          <div className="flex justify-between mb-2">
            <select
              value={month}
              onChange={handleMonthChange}
              className="text-sm border rounded px-2 py-1"
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
              className="text-sm border rounded px-2 py-1"
            >
              {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-xs font-medium text-gray-500 mb-1">
            {weekdays.map((day) => (
              <div key={day} className="text-center">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 text-sm gap-1">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                onClick={() => day && handleDateClick(day)}
                className={`h-8 w-8 flex items-center justify-center rounded-md cursor-pointer 
                ${
                  selectedDate?.getDate() === day &&
                  selectedDate?.getMonth() === month &&
                  selectedDate?.getFullYear() === year
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100 text-gray-800"
                }`}
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
