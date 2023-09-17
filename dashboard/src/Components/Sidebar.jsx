import React from 'react'
import "../Style.css"
import { NavLink } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';


const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className='sidebar_item'>
        <div className='profile_img'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=''/>
          <p className='profile_name'>Jheel Kour</p>
          <p className='profile_des'>Student</p>
        </div>
        <div className='nav_logo'>
          <div>
            <MailOutlineIcon sx={{fontSize:"16px"}}/>
          </div>
          <div>
            <AccountCircleOutlinedIcon sx={{fontSize:"16px"}}/>
          </div>
          <div>
            <SettingsOutlinedIcon sx={{fontSize:"16px"}}/>
          </div>
          <div>
            <PowerSettingsNewOutlinedIcon sx={{fontSize:"16px"}}/>
          </div>
        </div>
      </div>
      <div>
        <ul className='sidebar_list'>
          <li className='sidebar_items'>
            <NavLink to="/"><p>Dashboard</p>
            <div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/profile" ><p>Profile</p> <div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/documents" ><p>Document</p> <div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/mycourse" ><p>My Courses</p><div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/payment" ><p>Payment History</p><div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/notification" ><p>Notifications</p><div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/raiseTicket" > <p>Raise a Ticket</p><div></div></NavLink>
          </li>
          <li className='sidebar_items'>
            <NavLink to="/applyleave" ><p>Apply for a leave </p><div></div></NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar