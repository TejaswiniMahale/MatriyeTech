import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <p>Matriye.<span style={{color:"#23dbf0"}}>io</span></p>
      </div>
      <div>
        <div className='navbar_logos'>
          <LanguageIcon sx={{fontSize:"18px"}}/>
          <NotificationsNoneOutlinedIcon sx={{fontSize:"18px"}}/>
          <SettingsOutlinedIcon sx={{fontSize:"18px"}}/>
        </div>
        <div className='navbar_profile'>
          <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt=''/>
        </div>
        <div >
          <button className='logout_btn'>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar