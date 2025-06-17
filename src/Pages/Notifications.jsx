import React from 'react'
import { Bell, Calendar, Home, List, LogOut, Settings } from 'lucide-react';

const SidebarLink = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-200 transition ${active ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-white'}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const NotificationCard = ({ message }) => (
  <div className="bg-white shadow-sm p-4 rounded-lg mb-3 flex items-start gap-3">
    <div className="bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full">
      <Bell className="text-blue-800 w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold text-gray-700">Hello Naomie</p>
      <p className="text-sm text-gray-600">{message}</p>
      <p className="text-xs text-gray-400">20 Sec</p>
    </div>
  </div>
);

export default function Notifications() {
  return (
    <div className="flex min-h-screen bg-[#d8e5ec]">
      {/* Sidebar */}
      <aside className="w-84 bg-[#2c5d68] text-white p-6 flex flex-col justify-between rounded-r-3xl">
        <div>
          <div className="text-center mb-6">
            <img
              src="/src/assets/User.png"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-3 border-4 border-white"
            />
            <h2 className="text-lg font-bold">NAOMIE EKON</h2>
            <p className="text-sm">ekonnaomie69@gmail.com</p>
          </div>

          <SidebarLink icon={Home} label="Dashboard" /> <br />
          <SidebarLink icon={Calendar} label="Calender" /> <br />
          <SidebarLink icon={List} label="Activities" /> <br />
          <SidebarLink icon={Bell} label="Notifications" active /> <br />
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

        {/* Notifications */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
        <div>
          <p className="text-gray-500 mb-2">New</p>
          <NotificationCard message="Your next class is in 30 minutes time" />
          <NotificationCard message="Your next class is in 30 minutes time" />

          <p className="text-gray-500 mt-4 mb-2">Earlier</p>
          <NotificationCard message="Your next class is in 30 minutes time" />

          <p className="text-gray-500 mt-4 mb-2">This Week</p>
          <NotificationCard message="Your next class is in 30 minutes time" />
          <NotificationCard message="Your next class is in 30 minutes time" />
        </div>
      </main>
    </div>
  )
}
