import React from 'react'
import {
    CalendarDays,
    Bell,
    Settings,
    LogOut,
    Home,
    BookOpen,
    ActivitySquare,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#dbe7ed] text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[360px] bg-[#2c4b57] text-white p-4 flex flex-col rounded-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/src/assets/User.png"
            alt="Profile"
            className="w-40 h-40 rounded-full border-3 border-white mb-2"
          />
          <h2 className="text-lg font-semibold text-center leading-tight">Naomie Ekon</h2>
          <p className="text-xs text-center">ekonnaomie69@gmail.com</p>
        </div>

        <nav className="flex-1 space-y-6">
          <div className="flex items-center space-x-3 py-4 px-4 bg-white/30 rounded-md">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-3 py-4 px-4 hover:bg-white/10 rounded-md cursor-pointer">
            <CalendarDays className="w-5 h-5" />
            <span>Calender</span>
          </div>
          <div className="flex items-center space-x-3 py-4 px-4 hover:bg-white/10 rounded-md cursor-pointer">
            <ActivitySquare className="w-5 h-5" />
            <span>Activities</span>
          </div>
          <div className="flex items-center space-x-3 py-4 px-4 hover:bg-white/10 rounded-md cursor-pointer relative">
            <Bell className="w-5 h-5" />
            <span>Notifications</span>
            <span className="absolute top-1 right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
          <div className="flex items-center space-x-3 py-4 px-4 hover:bg-white/10 rounded-md cursor-pointer">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>
        </nav>

        <button className="flex items-center space-x-5 py-8 text-sm text-white mt-6 hover:text-red-300">
          <LogOut className="w-5 h-5" />
          <span>Sign-out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
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

        <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white p-3 pr-10 pt-10 rounded-xl">
            <div className="flex justify-between items-center mb-1 pl-10">
              <h4 className="font-semibold">Time Schedule of Classes</h4>
              <select className="text-sm border rounded px-4 py-2">
                <option>This Week</option>
              </select>
            </div>
            <img src="/src/assets/Bar chart.png" alt="Chart" className="w-full mt-1.5" />
            <div className="flex items-center justify-end mt-2 space-x-3 text-sm">
              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
                <span>No Classes</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 bg-[#2c4b57] rounded-full"></span>
                <span>Classes</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">09 - 06 - 2025</span>
              <CalendarDays className="w-5 h-5" />
            </div>
            <img src="/src/assets/Calendar.png" alt="Calendar" className="w-full mb-4" />
            <h5 className="font-semibold mb-2">Class Progress of the Day</h5>
            <ul className="text-sm space-y-2 pl-3 flex">
                <img src="/src/assets/System-Analysis.png" alt="" className='w-15' />
                <li className='pl-5'>Intro to OOP - Ongoing
                    <p>Time: 7:am - 11:am</p>
                </li>
            </ul>
            <ul className="text-sm space-y-2 pl-3 flex">
                <img src="/src/assets/OOP.png" alt="" className='w-15' />
                <li className='pl-5'>System Analysis & Design - Next
                    <p>Time: 11:am - 1:pm</p>
                </li>
            </ul>
            <ul className="text-sm space-y-2 pl-3 flex">
                <img src="/src/assets/Mobile-app.png" alt="" className='w-15' />
                <li className='pl-5'>Intro to Mobile App - Later
                    <p>Time: 3:pm - 5:pm</p>
                </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl mt-6">
          <h4 className="font-semibold mb-3">My Courses</h4>
          <div className="grid grid-cols-3 text-sm font-medium text-slate-600 border-b pb-2">
            <span>Course Name</span>
            <span>Number of Lessons</span>
            <span>Duration</span>
          </div>
          <div className="grid grid-cols-3 py-5 border-b">
            <span className="flex items-center space-x-5">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span>Data Integrity and Security</span>
            </span>
            <span>16/30</span>
            <span>4hrs</span>
          </div>
          <div className="grid grid-cols-3 py-5 border-b">
            <span className="flex items-center space-x-5">
              <BookOpen className="w-6 h-6 text-orange-400" />
              <span>Introduction to Mobile App</span>
            </span>
            <span>8/30</span>
            <span>2hrs</span>
          </div>
          <div className="grid grid-cols-3 py-5 border-b">
            <span className="flex items-center space-x-5">
              <BookOpen className="w-6 h-6 text-purple-400" />
              <span>Introduction to OOP</span>
            </span>
            <span>10/30</span>
            <span>4hrs</span>
          </div>
          <div className="grid grid-cols-3 py-5 border-b">
            <span className="flex items-center space-x-5">
              <BookOpen className="w-6 h-6 text-gray-400" />
              <span>System Analysis and Design</span>
            </span>
            <span>10/30</span>
            <span>4hrs</span>
          </div>
          <div className="grid grid-cols-3 py-5 border-b">
            <span className="flex items-center space-x-5">
              <BookOpen className="w-6 h-6 text-green-400" />
              <span>Embedded System</span>
            </span>
            <span>10/30</span>
            <span>2hrs</span>
          </div>
        </div>
      </main>
    </div>
  )
}
