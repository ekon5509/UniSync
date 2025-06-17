import React from 'react';
import {
  Bell,
  Calendar,
  Home,
  List,
  LogOut,
  Settings,
  User,
} from 'lucide-react';

const SidebarLink = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-200 transition ${active ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-white'}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

export default function Dashboard() {
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
            <h2 className="text-lg font-bold">NAOMIE EKON</h2>
            <p className="text-sm">ekonnaomie69@gmail.com</p>
          </div><br />
          <SidebarLink icon={Home} label="Dashboard" /> <br />
          <SidebarLink icon={Calendar} label="Calender" /> <br />
          <SidebarLink icon={List} label="Activities" active /> <br />
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

        {/* Activities Section */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-gray-500 text-sm">2024 - 2025 Academic Year</p>
            <h3 className="text-xl font-semibold mt-1">Second Semester</h3>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-gray-500 text-sm">Number of Courses</p>
            <h3 className="text-xl font-semibold mt-1">10</h3>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-gray-500 text-sm">Number of Credit Value</p>
            <h3 className="text-xl font-semibold mt-1">34</h3>
          </div>
        </div>

        {/* Credit Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <h4 className="text-lg font-semibold mb-4">Semester Credit Values</h4>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm mb-2 text-gray-600">Credit value distribution</p>
              <ul className="text-sm text-gray-700">
                <li className="mb-1">4 - credit Value: 4 Courses</li>
                <li className="mb-1">3 - credit Value: 4 Courses</li>
                <li className="mb-1">2 - credit Value: 2 Courses</li>
              </ul>
            </div>
            <div>
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">10</h3>
                  <p className="text-sm text-gray-600">Courses Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar + Attendance */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h4 className="text-lg font-semibold mb-2">June 2025</h4>
            <div className="grid grid-cols-7 text-center text-sm text-gray-600">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day}>{day}</div>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i + 1}
                  className={`py-1 ${i + 1 === 9 ? 'bg-blue-200 text-blue-800 rounded-full font-semibold' : ''}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md">
            <h4 className="text-lg font-semibold mb-4">Personal Attendance Checkups</h4>
            <ul className="text-sm text-gray-700 space-y-3">
              <li>
                <strong>EEC330</strong> - Today from 7am to 9am <input type="checkbox" checked readOnly />
              </li>
              <li>
                <strong>CEC304</strong> - Today from 9am to 11am <input type="checkbox" readOnly />
              </li>
              <li>
                <strong>CEC306</strong> - Today from 12pm to 2pm <input type="checkbox" checked readOnly />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
