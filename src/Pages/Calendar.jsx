import React from 'react';
import {
  Bell,
  Calendar,
  Home,
  List,
  LogOut,
  Settings,
} from 'lucide-react';

const SidebarLink = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-200 transition ${active ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-white'}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const schedule = [
  { day: "Mon", time: "7am to 9am", course: "CEC320", info: "Mr. Tchinda", bg: "bg-orange-200" },
  { day: "Mon", time: "9am to 11am", course: "CEC320", info: "Mr. Tchinda", bg: "bg-orange-200" },
  { day: "Tues", time: "7am to 9am", course: "EEC338", info: "Prof. Nana", bg: "bg-yellow-200" },
  { day: "Tues", time: "9am to 11am", course: "CEC304", info: "Prof. Sone", bg: "bg-gray-200" },
  { day: "Tues", time: "11am to 13pm", course: "CEC306", info: "Dr. Ntynga", bg: "bg-cyan-200" },
  { day: "Wed", time: "7am to 9am", course: "CEC318", info: "Dr. Meiengui", bg: "bg-green-200" },
  { day: "Wed", time: "9am to 11am", course: "CEC318", info: "Dr. Meiengui", bg: "bg-green-200" },
  { day: "Wed", time: "11am to 13pm", course: "CEC304", info: "Prof. Sone", bg: "bg-gray-200" },
  { day: "Thurs", time: "7am to 9am", course: "EEC338", info: "Prof. Nana", bg: "bg-yellow-200" },
  { day: "Thurs", time: "11am to 13pm", course: "CEC330", info: "Dr. Feudjio", bg: "bg-blue-200" },
  { day: "Thurs", time: "13pm to 15pm", course: "CEC330", info: "Dr. Feudjio", bg: "bg-blue-200" },
  { day: "Fri", time: "7am to 9am", course: "CEC302", info: "Dr. Nkwetyem", bg: "bg-yellow-100" },
  { day: "Fri", time: "9am to 11am", course: "CEC302", info: "Dr. Nkwetyem", bg: "bg-yellow-100" },
  { day: "Fri", time: "11am to 13pm", course: "EEC330", info: "Dr. Feudjio", bg: "bg-blue-100" },
];

const days = ["Time", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const times = ["7am to 9am", "9am to 11am", "11am to 13pm", "13pm to 15pm"];

export default function ClassSchedule() {
  return (
    <div className="flex min-h-screen bg-[#d8e5ec]">
      {/* Sidebar */}
      <aside className="w-84 bg-[#2c5d68] text-white p-6 flex flex-col justify-between rounded-r-3xl">
        <div>
          <div className="text-center mb-6">
            <img
              src="/src/assets/User.png"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-3 border-2 border-white"
            />
            <h2 className="text-lg font-bold">Naomie Ekon</h2>
            <p className="text-sm">ekonnaomie69@gmail.com</p>
          </div> <br />
          <SidebarLink icon={Home} label="Dashboard" /> <br />
          <SidebarLink icon={Calendar} label="Calender" active /> <br />
          <SidebarLink icon={List} label="Activities" /> <br />
          <SidebarLink icon={Bell} label="Notifications" /> <br />
          <SidebarLink icon={Settings} label="Settings" /> <br />
        </div>
        <SidebarLink icon={LogOut} label="Sign-out" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <input
            type="text"
            placeholder="Search for classes, courses, etc"
            className="w-full max-w-xl p-3 rounded-lg shadow-sm focus:outline-none"
            />
            <div className="flex items-center gap-4 ml-6">
            <button className="relative">
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <Settings className="w-6 h-6 text-gray-700" />
            </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-[#1e3a4c] to-[#2c4b57] text-white rounded-xl p-10 pl-20 flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl flex flex:col items-center font-bold">Hello , Naomie Ekon 👋</h1> <br /> <br />
            <p>Your personalized class schedule is ready to make</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-sm">Wed, Oct 9, 2024</span> <br />
            </div>
            <button className="m-3 px-6 py-3 bg-white text-slate-800 rounded-full text-sm flex items-center space-x-1">
                <span>Modify schedule</span>
            </button>
          </div>
          <img src="/src/assets/table-icon.png" alt="Desk" className="w-80" />
        </div>

        {/* Schedule Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3">
              <button className="bg-[#edf3f5] px-3 py-1 rounded-lg">Week</button>
              <button className="px-3 py-1">Month</button>
              <button className="px-3 py-1">Year</button>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#d8e5ec] px-4 py-2 rounded-xl text-sm">Add Reminders</button>
              <button className="bg-[#d8e5ec] px-4 py-2 rounded-xl text-sm">Add Event</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border border-gray-200 text-sm">
              <thead>
                <tr>
                  {days.map(day => (
                    <th key={day} className="border border-gray-300 py-2 bg-[#f0f4f8] font-medium text-gray-700">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {times.map(time => (
                  <tr key={time}>
                    <td className="border border-gray-300 font-medium text-gray-600 bg-[#f0f4f8] p-2">{time}</td>
                    {days.slice(1).map(day => {
                      const entry = schedule.find(e => e.day === day && e.time === time);
                      return (
                        <td key={day + time} className="border border-gray-300 p-2 text-center">
                          {entry ? (
                            <div className={`${entry.bg} p-2 rounded-lg font-semibold text-sm`}>
                              {entry.course}<br /><span className="text-xs font-normal">{entry.info}</span>
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}