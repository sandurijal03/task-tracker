import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/tile-block-menu.svg';

import { HeaderStyled } from '../../styles';

const Header = () => {
  return (
    <HeaderStyled>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'> Register</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
