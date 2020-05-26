import React from 'react';

import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='nav-container'>
      <div className='actual-navs-container'>
        <div className='nav'>
          <NavLink
            exact
            to={'/'}
            activeClassName='active-nav'
            className='nav-link'
          >
            Home
          </NavLink>
        </div>
        <div className='nav'>
          <NavLink
            to={'/users'}
            activeClassName='active-nav'
            className='nav-link'
          >
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
