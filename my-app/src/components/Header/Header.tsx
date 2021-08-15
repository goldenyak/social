import React from 'react';
import './Header.css';
import logo from './../../img/logo.png'

const Header = () => {
    return (
      <header className = 'header'>
          {/*<img src='https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png'/>*/}
          <img src={logo} alt='logotype'/>
      </header>
    )};

export default Header;