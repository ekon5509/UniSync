import React from 'react';
import {
  Bell,
  Calendar,
  Home,
  List,
  LogOut,
  Settings,
  User,
  Shield,
  Globe,
  Headphones,
  Gift,
  Star
} from 'lucide-react';

const SidebarLink = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-200 transition ${active ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-white'}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const SettingItem = ({ icon: Icon, label, value }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center mb-3">
    <div className="flex items-center gap-3">
      <div className="bg-blue-100 p-2 rounded-full">
        <Icon className="w-5 h-5 text-green-900" />
      </div>
      <span className="font-medium text-gray-700">{label}</span>
    </div>
    <div className="text-sm text-gray-400">{value || <span className="text-lg">▾</span>}</div>
  </div>
);

export default function SettingsPage() {
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
          <SidebarLink icon={Bell} label="Notifications" /> <br />
          <SidebarLink icon={Settings} label="Settings" active /> <br />
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

        {/* Settings Section */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Settings</h3>
        <div>
          <SettingItem icon={User} label="Edith Profile" />
          <SettingItem icon={Shield} label="Account & Security" />
          <SettingItem icon={Globe} label="Languages" value="English" />
          <SettingItem icon={Headphones} label="Contact Us" />
          <SettingItem icon={Gift} label="Invite Your friends" />
          <SettingItem icon={Star} label="Rate Us" />
        </div>
      </main>
    </div>
  );
}
