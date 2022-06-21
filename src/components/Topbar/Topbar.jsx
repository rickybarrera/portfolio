import React from 'react'
import './Topbar.scss'
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'TopBar ' + (menuOpen && 'active') }>

    <div className='Wrapper'>
        <div className="left">
        <a href="#intro" className='logo'> Ricky </a>
       <div className="itemContainer">
        <ContactPhoneIcon className='icon' /> 
        <span> 626 991 3431 </span>
        </div>
        <EmailIcon className='icon' />
        <span>rickybarrera0@gmail.com</span>
       </div>
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line 1'></span>
                <span className='line 2'></span>
                <span className='line 3'></span>
            </div>
        </div>
    </div>
    </div>
  )
}
