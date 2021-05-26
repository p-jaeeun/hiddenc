import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <b>HIDDENC</b>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mypage">My Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
