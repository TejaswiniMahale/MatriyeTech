import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Document from './Document'
import ApplyLeave from './ApplyLeave'
import MyCourses from './MyCourses'
import Notifications from './Notifications'
import Payment from './Payment'
import Profile from './Profile'
import RaiseTicket from './RaiseTicket'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/documents' element={<Document/>}/>
      <Route path='/applyleave' element={<ApplyLeave/>}/>
      <Route path='/mycourse' element={<MyCourses/>}/>
      <Route path='/notification' element={<Notifications/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/raiseTicket' element={<RaiseTicket/>}/>
    </Routes>
  )
}

export default MainRoutes