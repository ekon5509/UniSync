import React from 'react'
import './App.css'
import SignUpForm from './Pages/SignUp'
import SignUpAuthentication from './Pages/SignUpAuthentication'
import CreatingAccount from './Pages/CreatingAccount'
import ScheduleAuthentication from './Pages/ScheduleAuthentication'
import Dashboard from './Pages/Dashboard'
import Calendar from './Pages/Calendar'
import Activities from './Pages/Activities'
import Notifications from './Pages/Notifications'
import SettingsPage  from './Pages/SettingsPage'

const App = () => {
  return (
    <div className="min-h-screen">
      <CreatingAccount/>
    </div>
  )
}

export default App