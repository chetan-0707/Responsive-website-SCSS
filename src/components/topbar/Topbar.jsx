import React from 'react'
import "./topbar.scss";
// import {PersonIcon,EmailIcon }from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

function Topbar({menuOpen , setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="topWrapper">
          <div className="left">
            <a href="#intro" className='logo'> genius.</a>
            <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+91-9922212195</span>
            </div>

            <div className="itemContainer">
            <EmailIcon className='icon'/>
            <span>cbdryfruit@gmail.com</span>
            </div>
          </div>
          
          <div className="right">
            <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar
