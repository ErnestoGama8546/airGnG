import React from 'react';
import './Header.css';
import logo from './NTO.png';
import SearchIcon from '@material-ui/icons/Search';
import avatar from './avatar.png';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
  return (
    <div className='header'>
        <img
        className='header_icon'
        src={logo}
        alt='AirGnG Logo'
        />

        <div className='header_center'>
            <input type='text' />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <img
            className='avatar'
            src={avatar}
            alt='avatar logo'
            />



        </div>


    </div>
  )
}

export default Header