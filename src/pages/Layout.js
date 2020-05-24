import React, { useState } from 'react';
import Drawer from '../components/Drawer';
import '../assets/css/Layout.css';
import MainOutlet from '../components/MainOutlet';

function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='main-win-wrapper'>
      <Drawer
        isOpen={isOpen}
        onDrawerClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <MainOutlet />
    </div>
  );
}

export default Layout;
